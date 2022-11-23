import styled from 'styled-components';

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 12px;
  width: 218px;
  position: relative;

  p: nth-lastchild() {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;
