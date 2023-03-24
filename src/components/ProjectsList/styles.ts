import styled from 'styled-components';
import { CardHeader as CardHeaderBase } from '../Card';

export const RepositoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 30px;
`;

export const CardHeader = styled(CardHeaderBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const SeeMoreLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
