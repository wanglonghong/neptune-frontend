import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'TUNE',
    stakingTokenName: QuoteToken.TUNE,
    stakingTokenAddress: '0x826344754f200201b50524769A962516AD2bA6C2', // TUNE token
    contractAddress: { // masterChef contract
      97: '0xF9d273194Fa68E56817C17313672Db35367450eF', 
      56: '0xB543A8082294276D3dE730e74fb59f3b8771fc20',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://app.neptuneswap.org/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
