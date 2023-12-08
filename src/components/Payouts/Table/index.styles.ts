import styled from 'styled-components';

import { Table } from 'react-bootstrap';

interface TDTextProps {
  price?: boolean;
  status?: boolean;
}

interface TDBadgeProps {
  paid?: boolean;
}

export const MainTable = styled(Table)`
  --bs-table-striped-bg: rgba(244, 244, 244, 0.50);

  tbody, td, tfoot, th, thead, tr {
    border: none;
  }

  tbody {
    tbody tr:nth-child(odd) {
      background-color: --bs-table-striped-bg;
    }
  }
`;

export const TR = styled.tr`
`;

export const THText = styled.th`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.12px;
  padding: 15px 25px !important;
  color: #6F767E !important;
`;

export const TDText = styled.td<TDTextProps>`
  color: ${(props) => (props.price || props.status ? '#1A1D1F' : '#6F767E')} !important;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  padding: 15px 25px !important;
`;

export const TDBadge = styled.span<TDBadgeProps>`
  background-color: ${(props) => (props.paid ? '#60CA57' : 'rgba(111, 118, 126, 0.40)')};
  padding: 5px 10px;
  border-radius: 6px;
`;