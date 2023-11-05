export type ResultProps = {
  searchTerm: string;
};

export type Item = {
  name: string;
  gender: string;
  url: string;
};

export type SearchProps = {
  handleSearch: (searchTerm: string) => void;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};
