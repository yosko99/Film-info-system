import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import React from 'react';
import App from './App';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen/>
    </React.StrictMode>1
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
