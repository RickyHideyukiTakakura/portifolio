import styled from 'styled-components'

export const Container = styled.aside`
  margin: 40px 0 0 40px;
`

export const Card = styled.div`
  background: var(--bg-cards);
  width: 348px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 30px;

  strong {
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 25.14px;
    padding: 30px 0 20px 20px;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 292px;

  img {
    width: 128px;
    height: 128px;
    border-radius: 9999px;
    border: 2px solid #00ff00;

    margin-bottom: 30px;
  }

  h4 {
    font-size: 23px;
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    font-weight: 300;
    line-height: 16px;
  }
`

export const ExperienceListStyle = styled.ul`
  padding: 0 0 30px 50px;
`
