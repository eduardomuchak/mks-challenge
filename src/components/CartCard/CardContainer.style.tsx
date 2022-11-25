import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 95px;
  width: 379px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1352);
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;
