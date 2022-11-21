import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { GlobalStyles } from './GlobalStyles';
import { Home } from './pages/Home';
import { productsApi } from './services/apiSlice';

function App() {
  return (
    <ApiProvider api={productsApi}>
      <GlobalStyles />
      <div>
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
