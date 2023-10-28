import './Search.css';

function Search() {
  let placeHolder: string | null = '';
  if (localStorage.getItem('searchItem') !== null) {
    placeHolder = localStorage.getItem('searchItem') as string;
  }

  console.log(placeHolder);

  return (
    <div className="search-section">
      <form action="/action_page.php">
        <input
          type="text"
          name="search"
          placeholder={placeHolder}
          className="search-bar"
        />
        <button
          onClick={() => localStorage.setItem('searchItem', 'Search Term2')}
          type="submit"
          value="Search"
          className="submit-button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
