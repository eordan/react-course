export const fetchData = (searchTerm: string) => {
  const apiURL = searchTerm
    ? `https://swapi.dev/api/people/?search=${searchTerm}`
    : 'https://swapi.dev/api/people/';

  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
