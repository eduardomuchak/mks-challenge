import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { Home } from './pages/Home';
import { productsApi } from './services/apiSlice';

function App() {
  return (
    <ApiProvider api={productsApi}>
      <div>
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
