import styled from 'styled-components';

import { CloseButton } from './CloseButton.style';

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 486px;
  background-color: rgba(15, 82, 186, 1);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  animation: slideIn 2s ease-in-out 2s both infinite;

  h1 {
    font-size: 27px;
    font-weight: 700;
    line-height: 32px;
    color: #ffffff;
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <h1>Carrinho de Compras</h1>
      <CloseButton />
    </SidebarContainer>
  );
}
