import styled from 'styled-components'

export const MainStyles = styled.main`
  margin: 40px 40px 0 0;
`

export const Card = styled.div`
  background: var(--bg-cards);
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 30px;

  .my-projects {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
    }

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  & > strong {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  }
`

export const MultipleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 30px;
`
