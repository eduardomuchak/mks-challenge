import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { closeCart } from '../../redux/features/cart/cartSlice';

const CloseButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 39px;
  right: 22px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export function CloseButton() {
  const dispatch = useDispatch();

  return <CloseButtonContainer onClick={() => dispatch(closeCart())}>X</CloseButtonContainer>;
}
