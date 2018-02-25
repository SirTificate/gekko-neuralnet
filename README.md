# gekko-neuralnet
Neural network strategy for Gekko

# Install
copy the file(s) from /strategies/ into the strategies folder of your gekko install
copy the file(s) from /toml/ into the /config/strategies/ folder of your gekko install

# Usage / Configuration
For most USD or BTC pairs you have to normalize the input data. The bot needs input values between 0-1 to work. If the price of your pair is for instance $6.500 USD, set the `scale` parameter to 10.000.

 // the treshold for buying into a currency. e.g.: The predicted price is 1% above the current candle.close
threshold_buy = 1.00

// the treshold for selling into a currency. e.g.: The predicted price is 1% under the current candle.close
threshold_sell = -1.00

// The length of the candle.close price buffer. It's used to train the network on every update cycle.
price_buffer_len = 100

// The learning rate of net
learning_rate = 0.01

// Normalization factor
scale = 1

// learning speed
momentum = 0.9
decay = 0.01

//minimum number of prictions until the network is considered 'trained'. History size should be equal
min_predictions = 1000


If this strategy is useful for you and generates profits. Buy me a coffee, or two:
 
ETH 0x40ddba96695bc040ccbe34b4cfa3a7ae8f225583
BTC 1AigkGB4KzzRVmDDxwUxt8EaHRDbtpLNrH
NANO xrb_1iy9ztp485o5a5kumcbazz7178hqmzgcjwbesf73owi7zceaac6jrcgk3w9b
