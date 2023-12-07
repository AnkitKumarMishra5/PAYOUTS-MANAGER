import { MainTable, THText, TDText, TDBadge } from './index.styles'

function Table() {
  return (
    <MainTable striped>
      <thead>
        <tr>
          <THText>Username</THText>
          <THText>Date & Time</THText>
          <THText>Status</THText>
          <THText>Value</THText>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TDText>1</TDText>
          <TDText>Mark</TDText>
          <TDText status><TDBadge>Pending</TDBadge></TDText>
          <TDText price>@mdo</TDText>
        </tr>
        <tr>
          <TDText>2</TDText>
          <TDText>Jacob</TDText>
          <TDText status><TDBadge paid>Paid</TDBadge></TDText>
          <TDText price>@fat</TDText>
        </tr>
        <tr>
          <TDText>3</TDText>
          <TDText>Larry the Bird</TDText>
          <TDText status><TDBadge paid>Paid</TDBadge></TDText>
          <TDText price>@twitter</TDText>
        </tr>
      </tbody>
    </MainTable>
  );
}

export default Table;