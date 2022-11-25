import styled from 'styled-components';

export const CardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 24px;
  min-width: 64px;
  max-width: 100px;
  height: 26px;
  border-radius: 5px;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 15px;
    color: rgba(0, 0, 0, 1);
  }

  @media (max-width: 768px) {
    padding-right: 10px;
  }
`;
