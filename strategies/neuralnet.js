var convnetjs = require('convnetjs');
var math = require('mathjs');


var log = require('../core/log.js');

var config = require ('../core/util.js').getConfig();


var strategy = {

  priceBuffer : [],
  predictionCount : 0,
  neurons : 0,
  batchsize : 5,
  layer_activation : 'tanh',

  init : function() {

    this.priceBuffer = [];

    this.name = 'Neural Network';
    this.requiredHistory = config.tradingAdvisor.historySize;

    let layers = [
      {type:'input', out_sx:1, out_sy:1, out_depth: 1},
      {type:'fc', num_neurons: this.neurons, activation: this.activation},
      {type:'regression', num_neurons: 1}
    ];

    this.nn = new convnetjs.Net();

    this.nn.makeLayers( layers );
    this.trainer = new convnetjs.SGDTrainer(this.nn, {
      learning_rate: this.settings.learning_rate,
      momentum: this.settings.momentum,
      batch_size: this.batchsize,
      l2_decay: this.settings.decay
    });

  },

  learn : function () {
    for (let i = 0; i < this.priceBuffer.length - 1; i++) {
      let data = [this.priceBuffer[i]];
      let current_price = [this.priceBuffer[i + 1]];
      let vol = new convnetjs.Vol(data);
      this.trainer.train(vol, current_price);
      let predicted_values = this.nn.forward(vol);
      let accuracymatch = predicted_values.w[0] === current_price;
      this.nn.backward(accuracymatch);
      this.predictionCount++;

    }
  },

  update : function(candle)
  {
    this.priceBuffer.push(candle.close / this.settings.scale );
    if (2 > this.priceBuffer.length) return;

    for (i=0;i<3;++i) this.learn();

    while (this.settings.price_buffer_len < this.priceBuffer.length) this.priceBuffer.shift();
  },

  predictCandle : function() {
    let vol = new convnetjs.Vol(this.priceBuffer);
    let prediction = this.nn.forward(vol);
    return prediction.w[0];
  },

  check : function(candle) {
    if(this.predictionCount > this.settings.min_predictions)
    {
      let prediction = this.predictCandle();
      let currentPrice = candle.close / this.settings.scale;
      let meanp = math.mean(prediction, currentPrice);
      let meanAlpha = (meanp - currentPrice) / currentPrice * 100;

      let signal = meanp < currentPrice;
      if (signal === false  && meanAlpha> this.settings.threshold_buy )
      {

        log.debug("Buy - Predicted variation: ",meanAlpha);
        return this.advice('long');
      }
      else if
      (signal === true && meanAlpha < this.settings.threshold_sell)
      {

        log.debug("Sell - Predicted variation: ",meanAlpha);
        return this.advice('short');

      }

    }
  }


};

module.exports = strategy;
