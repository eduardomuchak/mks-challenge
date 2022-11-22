import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 44px;
    color: #ffffff;
    font-weight: 600;
    line-height: 19px;
  }

  h2 {
    font-size: 20px;
    color: #ffffff;
    font-weight: 300;
    line-height: 19px;
    align-self: center;
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 16px;
    }
  }
`;
