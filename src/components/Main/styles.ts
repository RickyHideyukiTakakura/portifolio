import styled from 'styled-components';
import { CardHeader as CardHeaderBase } from '../Card';

export const MainStyles = styled.main`
  margin: 40px 40px 0 0;
`;

export const CardHeader = styled(CardHeaderBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;
