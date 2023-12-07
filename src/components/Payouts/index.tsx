import { MainContainer, MainHeading, TableHeading, THText, THTag } from './index.styles';
import Table from './Table';

function Payouts() {
  return (
    <MainContainer>
      <MainHeading>Payouts</MainHeading>
      <TableHeading>
        <THTag />
        <THText>Payout History</THText>
      </TableHeading>
      <Table />
    </MainContainer>
  );
}

export default Payouts;