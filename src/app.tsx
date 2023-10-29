import React from 'react';
import Search from './search/search';
import Result from './result/result';
import './index.css';

class App extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchItem') || '',
    };
  }

  handleSearch = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  render() {
    return (
      <React.StrictMode>
        <Search handleSearch={this.handleSearch} />
        <Result searchTerm={this.state.searchTerm} />
      </React.StrictMode>
    );
  }
}

export default App;
