import React from 'react';
import Search from './components/SearchSection/SearchSection';
import Result from './components/result/result';
import ErrorBoundary from './errorBoundary';
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
