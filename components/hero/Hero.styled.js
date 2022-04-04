import styled from 'styled-components';
export const HeroStyled = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    div {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & > img {
      align-self: center;
    }
  }
`;

export const ImageC = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
