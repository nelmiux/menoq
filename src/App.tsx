import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '@/routes/AppRoutes';

import ErrorAlert from './components/ErrorAlert';
import { urlBase } from './config';

const App = () => {
  const basename = `/${urlBase}/`;

  return (
    <>
      <BrowserRouter basename={basename}>
        <AppRoutes />
      </BrowserRouter>
      <ErrorAlert />
    </>
  );
};

export default App;
