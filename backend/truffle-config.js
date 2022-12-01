const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "nut awesome canyon neither lottery genuine orbit crowd potato brother tragic vacuum"

module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    inf_Lottery_ropsten: {
      network_id: 5,
      gasPrice: 10000000,
      provider: new HDWalletProvider(mnemonic, 'https://eth-goerli.g.alchemy.com/v2/-jURXRFhzUzFH6RxDKZdMTrEF_OcZefp')
    }
  }
};
