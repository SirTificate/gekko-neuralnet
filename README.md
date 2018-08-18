# gekko-neuralnet
Neural network strategy for Gekko

This strategy was inspired from MoonGem's Zenbot code.
For reference, that's the original work: https://github.com/DeviaVir/zenbot/blob/f1a1f512293a65d4cd931deba34644d7e24f6e41/extensions/strategies/neural/strategy.js

# Version / Changelog
- 2018-04-03 - renamed hodle_threshold variable to hodl_threshold
- 2018-03-28 - Fixed SMMA input. Cleaned the training method

# Install
copy the file(s) from /strategies/ into the strategies folder of your gekko install
copy the file(s) from /toml/ into the /config/strategies/ folder of your gekko install

Install the modules in your gekko folder:
`npm install convnetjs mathjs`

# Usage / Configuration

```javascript

// the treshold for buying into a currency. e.g.: The predicted price is 1% above the current candle.close

threshold_buy = 1.00

// the treshold for selling a currency. e.g.: The predicted price is 1% under the current candle.close
threshold_sell = -1.00

// The length of the candle.close price buffer. It's used to train the network on every update cycle.
price_buffer_len = 100

// The learning rate of net
learning_rate = 0.01

// when the price falls up to 4% and the strat indicates to go short, hodl!
hodl_threshold = 0.96

// learning speed
momentum = 0.9
decay = 0.01

//minimum number of prictions until the network is considered 'trained'. History size should be equal
min_predictions = 1000

//enables stoploss function
stoploss_enabled = false

//trigger stoploss 5% under last buyprice
stoploss_threshold = 0.95

```

If this strategy is useful for you and generates profits. Buy me a coffee, or two:
 
ETH 0x40ddba96695bc040ccbe34b4cfa3a7ae8f225583

BTC 1AigkGB4KzzRVmDDxwUxt8EaHRDbtpLNrH

NANO xrb_1iy9ztp485o5a5kumcbazz7178hqmzgcjwbesf73owi7zceaac6jrcgk3w9b
