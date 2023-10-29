import React from 'react';
import Search from './search/search';
import Result from './result/result';
import './index.css';

class App extends React.Component {
  handleSearch = (searchTerm) => {
    this.resultComponent.fetchData(searchTerm);
  };

  render() {
    return (
      <React.StrictMode>
        <Search onSearch={this.handleSearch} />
        <Result ref={(component) => (this.resultComponent = component)} />
      </React.StrictMode>
    );
  }
}

export default App;
