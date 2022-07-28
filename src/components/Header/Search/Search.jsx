import "./Search.css";

const Search = () => {
  return (
    <form action="https://echo.htmlacademy.ru/" className="search-wrapper">
      <input
        className="input-search"
        type="text"
        placeholder="Search for a country…"
      />

      <select className="select">
        <option disabled>Filter by Region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </form>
  );
};

export default Search;
