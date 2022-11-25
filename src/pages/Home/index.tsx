import { useSelector } from 'react-redux';

import { Jelly, Ripples } from '@uiball/loaders';

import { CartIcon } from '../../components/CartIcon/index.style';
import { Container } from '../../components/Container/index.style';
import { Footer } from '../../components/Footer/index.style';
import { HeaderWrapper } from '../../components/Header/index.style';
import { LoadingWrapper } from '../../components/LoadingWrapper/index.style';
import { Logo } from '../../components/Logo/index.style';
import { Main } from '../../components/Main/index.style';
import { ProductCard } from '../../components/ProductCard/index.style';
import { Sidebar } from '../../components/Sidebar/index.style';
import { cartState } from '../../redux/features/cart/cartSlice';
import { useGetProductQuery } from '../../redux/services/apiSlice';
export const Home = () => {
  const { data, isLoading, isError } = useGetProductQuery({ page: 1, rows: 8, sort: 'id', order: 'ASC' });
  const { isOpen } = useSelector(cartState);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Jelly size={80} speed={0.9} color="#0F52BA" />
      </LoadingWrapper>
    );
  }
  if (isError) {
    return (
      <LoadingWrapper>
        <Ripples size={90} speed={2} color="rgba(217, 42, 42, 1)" />
        <h1>Opa! Aconteceu algum erro ao buscar as informações, recarrregue a página e tente novamente.</h1>
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      {isOpen && <Sidebar />}
      <HeaderWrapper>
        <Logo />
        <CartIcon />
      </HeaderWrapper>
      {!isLoading && (
        <Main>
          {data.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Main>
      )}
      <Footer />
    </Container>
  );
};
