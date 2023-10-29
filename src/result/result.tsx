import React, { Component } from 'react';
import './result.css';

class Result extends Component<object, { searchTerm: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
      searchTerm: '',
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { searchTerm } = this.state;
    const apiURL = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : 'https://swapi.dev/api/people/';

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data.results });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value.trim() });
  };

  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    const { items, error } = this.state;

    if (error) {
      return (
        <div>
          <p>An error occurred: {error.message}</p>
          <button onClick={this.throwError}>Throw Error</button>
        </div>
      );
    }

    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.url}>
              {item.name} - {item.gender}
            </li>
          ))}
        </ul>
        <button onClick={this.throwError}>Throw Error</button>
      </div>
    );
  }
}

export default Result;
