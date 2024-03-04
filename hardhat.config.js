require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ytEV6WvDMriRgIBPvIf8x_BESwmDDDfT',
      accounts: [
        'b1699b1495e6a723f8f44796012dce728045d60bdcbf889008c7659b186a39a2',
      ],
    },
  },
}
