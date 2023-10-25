import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './search/Search';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Search />
    <App />
  </React.StrictMode>
);
