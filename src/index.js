import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ZostelContextProvider from './UseContext/ZostelContext';
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ breakpoints, config })

ReactDOM.render(
  <Provider store={store}>
  <ZostelContextProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </ZostelContextProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();