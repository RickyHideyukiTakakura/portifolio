import styled from 'styled-components'

export const TechStyles = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  li {
    background: var(--bg-techs);
    border-radius: 30px;
    height: 24px;

    color: #000000;
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
