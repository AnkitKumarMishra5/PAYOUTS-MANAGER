import React from 'react';
import { MainTable, TR, THText, TDText, TDBadge } from './index.styles'

import { Payout } from '../../../interfaces/common'
interface TableProps {
  payouts: Payout[];
}

const Table: React.FC<TableProps> = ({ payouts }) => {
  const dateOptions = {
    weekday: 'short' as const,
    month: 'short' as const,
    day: 'numeric' as const,
    hour: 'numeric' as const,
    minute: 'numeric' as const,
    hour12: false
  }
  return (
    <MainTable striped>
      <thead>
        <TR>
          <THText>Username</THText>
          <THText>Date & Time</THText>
          <THText>Status</THText>
          <THText>Value</THText>
        </TR>
      </thead>
      <tbody>
        {payouts.map((payout, index) => (
          <TR key={index}>
            <TDText>{payout.username}</TDText>
            <TDText>{new Date(payout.dateAndTime).toLocaleString('en-US', dateOptions)}</TDText>
            <TDText status>
              <TDBadge
                paid={payout.status === 'Completed'}
              >
                {payout.status === 'Completed' ? 'Paid' : 'Pending'}
              </TDBadge>
            </TDText>
            <TDText price>{payout.value}</TDText>
          </TR>
        ))}
      </tbody>
    </MainTable>
  );
}

export default Table;