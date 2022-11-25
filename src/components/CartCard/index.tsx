import { CartItem } from '../../interfaces';
import { CardContainer } from './CardContainer.style';
import { CardImage } from './CardImage.style';
import { CardItemCounter } from './CardItemCounter.styles';
import { CardPrice } from './CardPrice.style';
import { CardTitle } from './CardTitle.style';

interface Props {
  product: CartItem;
}

export function CartCard({ product }: Props) {
  return (
    <div
      style={{
        alignSelf: 'center',
      }}
    >
      <CardContainer>
        <CardImage src={product.photo} alt={product.name} />

        <CardTitle>
          <p>{product.name}</p>
        </CardTitle>
        <CardItemCounter product={product} />
        <div style={{ alignSelf: 'center' }}>
          <CardPrice>
            <p>R$ </p>
            <p>{product.price.split('.')[0]}</p>
          </CardPrice>
        </div>
      </CardContainer>
    </div>
  );
}
