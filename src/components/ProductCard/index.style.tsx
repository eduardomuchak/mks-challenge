import { MdOutlineShoppingBag } from 'react-icons/md';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 285px;
  width: 218px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1352);
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  max-height: 158px;
  margin-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  background-color: #0f52ba;
  color: #ffffff;
  position: absolute;
  bottom: 0;

  &:hover {
    cursor: pointer;
    background-color: #003d9a;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`;

interface Props {
  product: any;
}

export function ProductCard({ product }: Props) {
  return (
    <Card>
      <Image src={product.photo} alt={product.name} />
      <CardFooter>
        <MdOutlineShoppingBag size={innerWidth > 768 ? 18 : 16} color="#FFFFFF" />
        <p>COMPRAR</p>
      </CardFooter>
    </Card>
  );
}
