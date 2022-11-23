import { MdOutlineShoppingBag } from 'react-icons/md';

import { CardContainer } from './CardContainer.style';
import { CardDescription } from './CardDescription.style';
import { CardFooter } from './CardFooter.style';
import { CardImage } from './CardImage.style';
import { CardPrice } from './CardPrice.style';
import { CardTitle } from './CardTitle.style';

interface Props {
  product: any;
}

export function ProductCard({ product }: Props) {
  return (
    <CardContainer>
      <CardImage src={product.photo} alt={product.name} />

      <CardTitle>
        <p>{product.name}</p>
        <CardPrice>
          <p>R$ </p>
          <p>{product.price.split('.')[0]}</p>
        </CardPrice>
      </CardTitle>

      <CardDescription>
        <p>{product.description}</p>
      </CardDescription>

      <CardFooter>
        <MdOutlineShoppingBag size={innerWidth > 768 ? 18 : 16} color="#FFFFFF" />
        <p>COMPRAR</p>
      </CardFooter>
    </CardContainer>
  );
}
