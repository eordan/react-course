import './Search.css';

function Search() {
  return (
    <div className="search-section">
      <form action="/action_page.php">
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          className="search-bar"
        />
        <input type="submit" value="Search" className="submit-button" />
      </form>
    </div>
  );
}

export default Search;
