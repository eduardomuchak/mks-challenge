import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 328px;
  width: 218px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1352);
  position: relative;

  &:hover {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1352);
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;
