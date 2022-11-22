import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: #0f52ba;
  color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  width: 100vw;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    height: 48px;
  }
`;
