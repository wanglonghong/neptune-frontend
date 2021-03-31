import React from 'react'
import { Card, CardBody, Heading, Text } from '@neptuneswap/neptuneswapuikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getNeptuneAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledNeptuneStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const NeptuneStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getNeptuneAddress()))
  const neptuneSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledNeptuneStats>
      <CardBody>
        <Heading color="contrast" size="xl" mb="24px">
          {TranslateString(534, 'Neptune Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total NEPTUNE Supply')}</Text>
          {neptuneSupply && <CardValue fontSize="14px" value={neptuneSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total NEPTUNE Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New NEPTUNE/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={2} />
        </Row>
      </CardBody>
    </StyledNeptuneStats>
  )
}

export default NeptuneStats
