import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import MainPage from './MainPage';
import Auth from './AppPortfolio/Auth/Auth'
import DetailPage from './AppPortfolio/DetailPage';
// import './index.css';
// import './portfolio.css';
import './AppPortfolio/style.css'
import PageNotFound from './AppPortfolio/Auth/PageNotFound';
import HomePage from './AppPortfolio/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
reportWebVitals();
