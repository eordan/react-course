import React from 'react';
import './search.css';

type SearchProps = {
  handleSearch: (searchTerm: string) => void;
};

class Search extends React.Component<SearchProps, { searchTerm: string }> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchItem') || '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value.trim() });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    localStorage.setItem('searchItem', searchTerm);
    this.props.handleSearch(searchTerm);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.handleSearch();
  };

  render() {
    return (
      <div className="search-section">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder={this.state.searchTerm}
            className="search-bar"
            onChange={this.handleInputChange}
            value={this.state.searchTerm}
          />
          <button type="submit" className="submit-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
