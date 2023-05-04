import searchicon from "./assets/images/icon-search.svg";

const Search = () => {
  return (
    <form className="search">
      <label htmlFor="search">Search anything</label>
      <input
        type="text"
        name="example"
        placeholder="Search for any word..."
      ></input>
      <img className="search-icon" src={searchicon}></img>
    </form>
  );
};

export default Search;
