import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './portfolio.css';
import './AppPortfolio/style.css'
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';
import HomePage from './AppPortfolio/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/welcome-to-portfolio',
    element: <MainPage />
  },
  {
    path: '/portfolio',
    element: <HomePage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
