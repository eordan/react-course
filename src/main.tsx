import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './search/search';
import Result from './result/result';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Search />
    <Result />
  </React.StrictMode>
);
