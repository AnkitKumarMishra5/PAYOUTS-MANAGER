import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const MainContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const SubContainer = styled(Container)`
`;

export const MainHeading = styled.h1`
  color: #272B30;
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.8px;
  padding-bottom: 50px;
`;

export const TableHeading = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 10px;
`;

export const THText = styled.span`
  color: #1A1D1F;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.4px;
`;

export const THTag = styled.span`
  display: inline-block;
  width: 16px;
  height: 32px;
  border-radius: 4px;
  background: #999DFF;
`;