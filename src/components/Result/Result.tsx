import React, { useState, useEffect, useCallback } from 'react';
import { ResultProps, Item } from '../../service/types';
import './Result.scss';

export function Result(props: ResultProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(() => {
    const apiURL = props.searchTerm
      ? `https://swapi.dev/api/people/?search=${props.searchTerm}`
      : 'https://swapi.dev/api/people/';

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, [props.searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const throwError = () => {
    throw new Error('Test error');
  };

  if (error) {
    return (
      <div>
        <p>An error occurred: {error.message}</p>
        <button onClick={throwError}>Throw Error</button>
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
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
}
