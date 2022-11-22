import { MdShoppingCart } from 'react-icons/md';

import { Jelly, Ripples } from '@uiball/loaders';

import { CartIcon } from '../../components/CartIcon/index.style';
import { Container } from '../../components/Container/index.style';
import { Footer } from '../../components/Footer/index.style';
import { HeaderWrapper } from '../../components/Header/index.style';
import { LoadingWrapper } from '../../components/LoadingWrapper/index.style';
import { Logo } from '../../components/Logo/index.style';
import { Main } from '../../components/Main/index.style';
import { useGetProductQuery } from '../../services/apiSlice';
export const Home = () => {
  const innerWidth = window.innerWidth;
  const { isLoading, isError } = useGetProductQuery({ page: 1, rows: 8, sort: 'id', order: 'ASC' });

  // console.log(isLoading);
  // console.log(data);

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
      <HeaderWrapper>
        <Logo>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </Logo>
        <CartIcon>
          <MdShoppingCart size={innerWidth > 768 ? 22 : 16} color="black" />
          <p>0</p>
        </CartIcon>
      </HeaderWrapper>
      <Main>
        <h1>Home</h1>
      </Main>
      <Footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
};
