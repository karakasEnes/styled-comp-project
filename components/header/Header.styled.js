import styled from 'styled-components';

export const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const NavC = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const LogoC = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;
