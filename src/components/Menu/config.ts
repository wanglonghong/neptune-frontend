import { MenuEntry } from '@neptuneswap/neptuneswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.app.neptuneswap.org',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange.app.neptuneswap.org/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/neptunes-swap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@neptune_finance',
      },
    ],
  },
]

export default config
