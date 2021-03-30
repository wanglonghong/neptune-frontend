import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'TUNE-BNB LP',
    lpAddresses: {
      97: '0x807c3dae994d364a498cd21151fede0827ff2db6',
      56: '0x3628b7f2fbeab87a55bf3c25ce5feca5b6955d55',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xFB2df30e1e68d828C185176049ea1bf1304157cB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'TUNE-BUSD LP',
    lpAddresses: {
      97: '0x52d9be425f0c6a91a97b22504767ec7c3b396c74',
      56: '0x81a8e6acf5983355ed6d114aebb0abb7474aa518',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xFB2df30e1e68d828C185176049ea1bf1304157cB',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xFB2df30e1e68d828C185176049ea1bf1304157cB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xFB2df30e1e68d828C185176049ea1bf1304157cB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xFB2df30e1e68d828C185176049ea1bf1304157cB',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },     
]

export default farms
