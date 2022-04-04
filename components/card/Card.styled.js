import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  gap: 40px;

  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  flex-direction: ${(props) => props.layout || 'row'};

  padding: 60px;

  & .content {
    justify-content: center;
    align-self: center;
    padding-left: 20px;
  }

  & .img-container {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
