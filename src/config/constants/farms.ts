import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'TUNE-BNB LP',
    lpAddresses: {
      97: '0x807c3dae994d364a498cd21151fede0827ff2db6',
      56: '0x41039b01e5079ae2c27d8915b4fb5e2a3f860df9',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xbE3F4046ca72252F91A6A598F81398065C50059f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'TUNE-BUSD LP',
    lpAddresses: {
      97: '0x52d9be425f0c6a91a97b22504767ec7c3b396c74',
      56: '0xddb537aadf973144e792cded0897c059e8921d51',
    },
    tokenSymbol: 'TUNE',
    tokenAddresses: {
      97: '0x826344754f200201b50524769A962516AD2bA6C2',
      56: '0xbE3F4046ca72252F91A6A598F81398065C50059f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
]

export default farms
