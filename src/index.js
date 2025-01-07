import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
    <React.StrictMode>
      <Provider store={appStore}>
      <App />
      </Provider>
    </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
