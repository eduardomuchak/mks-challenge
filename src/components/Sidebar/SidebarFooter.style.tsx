import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { CartItem } from '../../interfaces';
import { cartState } from '../../redux/features/cart/cartSlice';

export const SidebarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  min-height: 97px;
  height: 97px;
  background-color: black;
  bottom: 0;

  p {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    color: white;
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 40px;
  padding-left: 40px;

  p {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    color: white;
  }

  &:hover {
    cursor: pointer;
  }
`;

export function SidebarFooter() {
  const { cartItems } = useSelector(cartState);
  const totalPrice = cartItems.reduce((acc: number, item: CartItem) => acc + Number(item.price) * item.count, 0);
  return (
    <>
      <TotalPriceContainer>
        <p>Total</p>
        <p>
          R${' '}
          {totalPrice.toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </TotalPriceContainer>
      <SidebarFooterContainer>
        <p>Finalizar</p>
      </SidebarFooterContainer>
    </>
  );
}
