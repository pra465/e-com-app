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
