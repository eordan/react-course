import React, { useState, useEffect, useCallback } from 'react';
import { ResultProps, Item } from '../../service/types';
import { fetchData } from '../../service/api';
import './Result.scss';

export function Result(props: ResultProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchDataFromApi = useCallback(() => {
    fetchData(props.searchTerm)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [props.searchTerm]);

  useEffect(() => {
    fetchDataFromApi();
  }, [fetchDataFromApi]);

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
