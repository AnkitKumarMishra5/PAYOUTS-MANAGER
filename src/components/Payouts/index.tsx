import { useEffect, useState } from 'react'
import { MainContainer, SubContainer, MainHeading, TableHeading, THText, THTag } from './index.styles'
import axios from 'axios'

import { Payout } from '../../interfaces/common'
import Table from './Table'

function Payouts() {
  const [payouts, setPayouts] = useState<Payout[]>([])
  
  useEffect(() => {
    fetchPayouts()
  }, [])

  const fetchPayouts = async () => {
    try {
      const res = await axios.get((process.env.REACT_APP_API_URL) as string)
      const { data: payouts } = res.data
      setPayouts(payouts)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MainContainer>
      <MainHeading>Payouts</MainHeading>
      <SubContainer>
        <TableHeading>
          <THTag />
          <THText>Payout History</THText>
        </TableHeading>
        <Table payouts={payouts} />
      </SubContainer>
    </MainContainer>
  );
}

export default Payouts;