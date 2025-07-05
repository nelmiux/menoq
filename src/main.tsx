import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { PersistGate } from 'redux-persist/integration/react';

import ViewProvider from '@/contexts/ViewContext';

import App from './App';
import { ErrorFallback } from './error';
import { worker } from './mocks/browser';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store/store';
import theme from './theme';
import { initializeApp } from './utilities/initializeApp';

const container = document.getElementById('app') as Element;
const root = createRoot(container);

const renderApp = root.render(
  (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ViewProvider>
                <App />
              </ViewProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </StrictMode>
      </PersistGate>
    </Provider>
  ) as ReactNode,
);

initializeApp(worker)
  .then(() => renderApp)
  .catch((error) => {
    throw error;
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
