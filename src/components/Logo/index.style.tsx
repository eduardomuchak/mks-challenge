import styled from 'styled-components';

export const LogoContainer = styled.div`
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

export function Logo() {
  return (
    <LogoContainer>
      <h1>MKS</h1>
      <h2>Sistemas</h2>
    </LogoContainer>
  );
}
