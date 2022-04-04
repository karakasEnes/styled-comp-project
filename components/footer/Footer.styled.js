import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  & .container-flex {
    display: flex;

    ul {
      list-style: none;
      flex: 1;
    }

    ul li {
      margin-bottom: 20px;
    }
  }

  p {
    text-align: right;
  }
`;
