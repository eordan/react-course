import React from 'react';
import './SearchBar.scss';

export function SearchBar({
  searchTerm,
  handleInputChange,
}: {
  searchTerm: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  return (
    <input
      type="text"
      name="search"
      placeholder={searchTerm}
      className="search-bar"
      onChange={handleInputChange}
      value={searchTerm}
    />
  );
}
