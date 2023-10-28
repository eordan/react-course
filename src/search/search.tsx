import './search.css';
import React from 'react';

class Search extends React.Component<object, { searchTerm: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedTerm = localStorage.getItem('searchItem');
    if (savedTerm) {
      this.setState({ searchTerm: savedTerm });
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    localStorage.setItem('searchItem', this.state.searchTerm);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.handleSearch();
  };

  render() {
    return (
      <div className="search-section">
        <form onSubmit={this.handleSubmit} action="/action_page.php">
          <input
            type="text"
            name="search"
            placeholder={this.state.searchTerm}
            className="search-bar"
            onChange={this.handleInputChange}
            value={this.state.searchTerm}
          />
          <button type="submit" value="Search" className="submit-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
