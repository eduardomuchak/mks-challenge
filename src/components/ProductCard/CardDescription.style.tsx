import styled from 'styled-components';

export const CardDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 12px;
  padding-bottom: 38px;
  padding-top: 10px;
  height: 285px;
  width: 218px;
  overflow: scroll;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;
