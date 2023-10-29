import React from 'react';
import Search from './search/search';
import Result from './result/result';
import ErrorBoundary from './errorBoundary';
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
        <ErrorBoundary>
          <Search handleSearch={this.handleSearch} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Result searchTerm={this.state.searchTerm} />
        </ErrorBoundary>
      </React.StrictMode>
    );
  }
}

export default App;
