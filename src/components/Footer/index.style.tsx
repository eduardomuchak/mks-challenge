import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34px;
  min-width: 99.9vw;
  width: 100%;
  background-color: #eeeeee;
  bottom: 0;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    line-height: 15px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <p>© 2021 MKS Sistemas. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}
