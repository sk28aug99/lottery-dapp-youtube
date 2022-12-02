const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = key.env;


module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    goerli: {
      network_id: 5,
      gasPrice: 10000000,
      provider: new HDWalletProvider(MNEMONIC, 'https://goerli.infura.io/v3/21afb0e587b34969b30d70d6c1351d99'),
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  }
};
