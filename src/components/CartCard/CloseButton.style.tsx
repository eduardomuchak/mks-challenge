import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { CartItem } from '../../interfaces';
import { removeFromCart } from '../../redux/features/cart/cartSlice';

const CloseButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

interface Props {
  product: CartItem;
}

export function CloseButton({ product }: Props) {
  const dispatch = useDispatch();

  return <CloseButtonContainer onClick={() => dispatch(removeFromCart(product))}>X</CloseButtonContainer>;
}
