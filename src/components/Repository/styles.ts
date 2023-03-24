import styled from 'styled-components';

export const Repository = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  p + div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;
