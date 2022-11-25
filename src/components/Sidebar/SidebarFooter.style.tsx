import styled from 'styled-components';

export const SidebarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  min-height: 97px;
  height: 97px;
  background-color: black;
  bottom: 0;

  p {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    color: white;
  }
`;

export function SidebarFooter() {
  return (
    <SidebarFooterContainer>
      <p>Finalizar</p>
    </SidebarFooterContainer>
  );
}
