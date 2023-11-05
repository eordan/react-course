import React from 'react';
import SearchSection from './components/SearchSection';
import Result from './components/Result';
import ErrorBoundary from './components/ErrorBoundary';
import './index.scss';

type AppState = {
  searchTerm: string;
};

class App extends React.Component<object, AppState> {
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
          <SearchSection handleSearch={this.handleSearch} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Result searchTerm={this.state.searchTerm} />
        </ErrorBoundary>
      </React.StrictMode>
    );
  }
}

export default App;
