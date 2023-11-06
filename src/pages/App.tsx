import React, { useState, useEffect } from 'react';
import SearchSection from '../components/SearchSection';
import Result from '../components/Result';
import ErrorBoundary from '../components/ErrorBoundary';
// import { Route, Switch } from 'react-router-dom';
import './index.scss';

export function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchItem') || ''
  );

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    localStorage.setItem('searchItem', searchTerm);
  }, [searchTerm]);

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <SearchSection handleSearch={handleSearch} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Result searchTerm={searchTerm} />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
