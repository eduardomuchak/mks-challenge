import toast, { Toaster } from 'react-hot-toast';

import { Jelly } from '@uiball/loaders';

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
  if (isError) {
    toast.error('Opa! Aconteceu algum erro ao buscar as informações', {
      id: 'toast-principal',
    });
    return <></>;
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div> Data </div>
    </>
  );
};
