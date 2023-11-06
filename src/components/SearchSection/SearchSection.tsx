import React, { useState } from 'react';
import Button from '../Button';
import SearchBar from '../SearchBar';
import { SearchProps } from '../../service/types';
import './SearchSection.scss';

export function SearchSection(props: SearchProps): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchItem') || ''
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = () => {
    localStorage.setItem('searchItem', searchTerm);
    props.handleSearch(searchTerm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
        />
        <Button />
      </form>
      <p>Enter `Luke`, `r2`, or `Vader`</p>
    </div>
  );
}
