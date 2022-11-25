import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { openCart } from '../../redux/features/cart/cartSlice';

export const CartIconContainer = styled.div`
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

  @media (max-width: 768px) {
    height: 26px;
    width: 62px;
    border-radius: 8px;

    p {
      font-size: 12px;
    }
  }
`;

export function CartIcon() {
  const innerWidth = window.innerWidth;

  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(openCart())}>
      <MdShoppingCart size={innerWidth > 768 ? 22 : 16} color="black" />
      <p>0</p>
    </CartIconContainer>
  );
}
