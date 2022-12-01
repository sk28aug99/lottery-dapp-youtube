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
      provider: new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/21afb0e587b34969b30d70d6c1351d99')
    }
  }
};
