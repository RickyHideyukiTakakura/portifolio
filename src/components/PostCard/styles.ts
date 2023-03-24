import styled from 'styled-components';

export const PostStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 128px;
    height: 128px;
    border-radius: 9999px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  strong {
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }

  strong + p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;
