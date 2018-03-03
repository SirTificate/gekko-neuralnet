# gekko-neuralnet
Neural network strategy for Gekko

This strategy was inspired from Mounir's strategy, found on the Gekko Discord channel. 
For reference, that's the original work: https://github.com/cloggy45/Gekko-Bot-Resources/blob/master/gekko/strategies/mounirs-ga-version-2.js

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
