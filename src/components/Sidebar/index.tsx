import { useSelector } from 'react-redux';

import { CartItem } from '../../interfaces';
import { cartState } from '../../redux/features/cart/cartSlice';
import { CartCard } from '../CartCard';
import { CloseButton } from './CloseButton.style';
import { ProductsContainer } from './ProductsContainer.style';
import { SidebarContainer } from './SidebarContainer.style';
import { SidebarFooter } from './SidebarFooter.style';

export function Sidebar() {
  const { cartItems } = useSelector(cartState);

  return (
    <SidebarContainer>
      <CloseButton />
      <div>
        <h1>Carrinho de Compras</h1>
      </div>
      <ProductsContainer>
        {cartItems.map((item: CartItem) => (
          <CartCard key={item.id} product={item} />
        ))}
      </ProductsContainer>
      <SidebarFooter />
    </SidebarContainer>
  );
}
