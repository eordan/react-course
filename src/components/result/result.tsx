import React, { Component } from 'react';
import './result.scss';

type ResultProps = {
  searchTerm: string;
};

type Item = {
  name: string;
  gender: string;
  url: string;
};

class Result extends Component<
  ResultProps,
  { items: Item[]; error: Error | null }
> {
  constructor(props: ResultProps) {
    super(props);
    this.state = {
      items: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: ResultProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const apiURL = this.props.searchTerm
      ? `https://swapi.dev/api/people/?search=${this.props.searchTerm}`
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
