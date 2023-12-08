import { useEffect, useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { 
  MainContainer, 
  MainHeading, 
  SubContainer, 
  TableHeading, 
  SearchContainer, 
  THText, 
  THTag 
} from './index.styles'
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
      const res = await axios.get((process.env.REACT_APP_PAYOUTS_ENDPOINT) as string)
      const { data: allPayouts } = res.data
      localStorage.setItem('allPayouts', JSON.stringify(allPayouts));
      setPayouts(allPayouts)
    } catch (error) {
      console.error(error)
    }
  }

  const searchPayouts = async (e: React.FormEvent<HTMLInputElement>) => {
    try {
      const query = (e.target as HTMLInputElement).value

      if(query !== '') {
        const res = await axios.get(
          (process.env.REACT_APP_SEARCH_PAYOUTS_ENDPOINT) as string, 
          { params: { query } }
        )
        const filteredPayouts = res.data
        setPayouts(filteredPayouts)
        return
      }

      const allPayouts = JSON.parse(localStorage.getItem('allPayouts') as string)
      setPayouts(allPayouts)
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
        <SearchContainer>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search username"
              aria-label="Search username"
              onInput={searchPayouts}
            />
            <Button variant="outline-secondary">
              Search
            </Button>
          </InputGroup>
        </SearchContainer>
        <Table payouts={payouts} />
      </SubContainer>
    </MainContainer>
  );
}

export default Payouts;