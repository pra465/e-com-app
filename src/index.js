import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShoesPage from './components/Tamplates/ShoesPage/ShoesPage';
import ClothingPage from './components/Tamplates/ClothingPage/ClothingPage';
import Home from './components/Tamplates/Home';
import ProductDetailsPage from './components/Tamplates/ProductDetailsPage/ProductDetailsPage';
import SearchPage from './components/Tamplates/SearchPage/SearchPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Shoes',
        element: <ShoesPage />,
      },
      {
        path: '/clothing',
        element: <ClothingPage />,
      },
      {
        path: '/:productId',
        element: <ProductDetailsPage />,
      },
      {
        path: '/searchedProducts',
        element: <SearchPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoute}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
