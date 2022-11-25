import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { CartItem } from '../../interfaces';
import { decrement, increment } from '../../redux/features/cart/cartSlice';

export const CardItemCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  width: 90px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 0.3px solid rgba(191, 191, 191, 1);

  @media (max-width: 768px) {
    height: 22px;
    width: 62px;
    border-radius: 4px;
  }
`;

export const CardItemCounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: black;
  line-height: 22px;
  flex: 1;

  @media (max-width: 768px) {
    height: 26px;
    width: 100%;
  }
`;

export const CardItemButtonText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  background-color: transparent;
  font-size: 12px;
  font-weight: 400;
  color: black;
  line-height: 10px;
  text-align: center;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    height: 22px;
    font-size: 10px;
  }
`;

export const CardItemCounterText = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: black;
  line-height: 10px;
  align-items: center;
  justify-content: center;
`;

interface Props {
  product: CartItem;
}

export function CardItemCounter({ product }: Props) {
  const dispatch = useDispatch();

  return (
    <div style={{ alignSelf: 'center' }}>
      <CardItemCounterContainer>
        <CardItemCounterButton onClick={() => dispatch(decrement(product))}>
          <CardItemButtonText> - </CardItemButtonText>
        </CardItemCounterButton>
        <CardItemCounterText>{product.count}</CardItemCounterText>
        <CardItemCounterButton onClick={() => dispatch(increment(product))}>
          <CardItemButtonText> + </CardItemButtonText>
        </CardItemCounterButton>
      </CardItemCounterContainer>
    </div>
  );
}
