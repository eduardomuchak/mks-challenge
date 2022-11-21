import { Jelly, Ripples } from '@uiball/loaders';

import { LoadingWrapper } from '../../components/LoadingWrapper/index.style';
import { useGetProductQuery } from '../../services/apiSlice';
export const Home = () => {
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
  if (!isError) {
    return (
      <LoadingWrapper>
        <Ripples size={90} speed={2} color="rgba(217, 42, 42, 1)" />
        <h1>Opa! Aconteceu algum erro ao buscar as informações, recarrregue a página e tente novamente.</h1>
      </LoadingWrapper>
    );
  }

  return (
    <>
      <div> Data </div>
    </>
  );
};
