import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'TUNE',
    stakingTokenName: QuoteToken.TUNE,
    stakingTokenAddress: '0xC0A422bCfBD12Cf55A25b8Fe8a7e9F5f6296499a', // TUNE token
    contractAddress: { // masterChef contract
      97: '0xF9d273194Fa68E56817C17313672Db35367450eF',
      56: '0x5FC83d97EC26F91265aA3608D4EADF5d30FB8869',
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
