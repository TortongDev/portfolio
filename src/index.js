import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import MainPage from './MainPage';
import HomePage from './AppPortfolio/HomePage';
import DetailPage from './AppPortfolio/DetailPage';
// import './index.css';
// import './portfolio.css';
import './AppPortfolio/style.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome-to-portfolio" element={<MainPage />} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/detail/:idUser" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

// After

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
