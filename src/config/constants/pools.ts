import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'TUNE',
    stakingTokenName: QuoteToken.TUNE,
    stakingTokenAddress: '0xFB2df30e1e68d828C185176049ea1bf1304157cB', // TUNE token
    contractAddress: { // masterChef contract
      97: '0xF9d273194Fa68E56817C17313672Db35367450eF',
      56: '0xA8dDC3b7776DdBf292CC3f8943E27d7d51a2816E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://app.neptuneswap.org/',
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
