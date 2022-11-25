import styled from 'styled-components';

export const CardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  min-width: 64px;
  max-width: 100px;
  height: 26px;
  border-radius: 5px;
  background-color: rgba(55, 55, 55, 1);

  p {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    color: rgba(255, 255, 255, 1);
  }
`;
