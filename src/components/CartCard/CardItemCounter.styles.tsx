import styled from 'styled-components';

export const CardItemCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 45px;
  width: 90px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const CardItemCounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: black;
  line-height: 22px;
`;

export const CardItemCounterText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: black;
  line-height: 22px;
  text-align: center;
`;

export function CardItemCounter({ quantity }: any) {
  return (
    <CardItemCounterContainer>
      <CardItemCounterButton> - </CardItemCounterButton>
      <CardItemCounterText>{quantity}</CardItemCounterText>
      <CardItemCounterButton> + </CardItemCounterButton>
    </CardItemCounterContainer>
  );
}
