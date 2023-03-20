import styled from 'styled-components'

export const RepositoryStyles = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--bg-cards);

  border-radius: 20px;
  margin-bottom: 30px;
  padding: 30px;
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
`
