import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --body-bg-color: #22212c;
    --text-color: #837e9f;
    --bg-cards: #302f3d;
    --bg-techs: #cb92b1;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--body-bg-color);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #root {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    gap: 60px;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  img svg {
    color: var(--text-color)
  }
`;
