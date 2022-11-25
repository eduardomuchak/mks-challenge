import styled from 'styled-components';

export const SidebarContainer = styled.aside`
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
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 486px;
    }
  }

  h1 {
    font-size: 27px;
    font-weight: 700;
    line-height: 32px;
    color: #ffffff;
    margin-top: 36px;
    margin-left: 47px;
    max-width: 70%;
  }
  div {
    animation: showItems 1s;
    align-self: flex-start;

    @keyframes showItems {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    width: 330px;

    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 330px;
      }
    }
  }
`;
