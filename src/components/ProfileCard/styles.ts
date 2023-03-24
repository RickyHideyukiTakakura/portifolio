import styled from 'styled-components';

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
`;
