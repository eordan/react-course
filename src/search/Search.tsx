import './Search.css';
import React from 'react';

class Search extends React.Component<object, { searchTerm: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '', // Define searchTerm in the initial state
    };
  }

  componentDidMount() {
    // Load the saved search term from local storage on component mount
    const savedTerm = localStorage.getItem('searchItem');
    if (savedTerm) {
      this.setState({ searchTerm: savedTerm });
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the search term in state when the input changes
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    // Save the search term to local storage when the button is clicked
    localStorage.setItem('searchItem', this.state.searchTerm);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting
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
