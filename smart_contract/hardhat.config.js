require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nPaGg47Qe_eg7vJxeWRGR-RojMG6NUpQ',
      accounts: [ 'ecf83c5670d1c019fef86307fde6c353e07b5cd242841bc180968ccdf8a83516' ]
    }
  }
}