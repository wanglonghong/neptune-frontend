import React from 'react'
import { Text } from '@neptuneswap/neptuneswapuikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getNeptuneAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCombustBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const TranslateString = useI18n()
  const cakeBalance = useTokenBalance(getNeptuneAddress())
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(usePriceCombustBusd()).toNumber()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(cakeBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardBusdValue value={busdBalance} />
    </>
  )
}

export default CakeWalletBalance
