import styled from 'styled-components';

export const CartIcon = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 90px;
  border-radius: 8px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    color: black;
    line-height: 22px;
  }
`;
