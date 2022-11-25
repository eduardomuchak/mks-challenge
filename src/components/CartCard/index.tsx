// import { useDispatch } from 'react-redux';

import { CardContainer } from './CardContainer.style';
import { CardImage } from './CardImage.style';
import { CardItemCounter } from './CardItemCounter.styles';
import { CardPrice } from './CardPrice.style';
import { CardTitle } from './CardTitle.style';

interface Props {
  product: any;
}

export function CartCard({ product }: Props) {
  // const dispatch = useDispatch();

  return (
    <CardContainer>
      <CardImage src={product.photo} alt={product.name} />

      <CardTitle>
        <p>{product.name}</p>
      </CardTitle>
      <CardItemCounter quantity={product.count} />
      <CardPrice>
        <p>R$ </p>
        <p>{product.price.split('.')[0]}</p>
      </CardPrice>
    </CardContainer>
  );
}
