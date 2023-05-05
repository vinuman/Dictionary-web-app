import searchicon from "./assets/images/icon-search.svg";
import { useState } from "react";

const Search = ({
  search,
  setSearch,
  handleInput,
  handleSearch,
  handleKeyDown,
}) => {
  return (
    <form className="search">
      <label htmlFor="search">Search anything</label>
      <input
        type="text"
        name="example"
        placeholder="Search for any word..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      ></input>
      <img
        style={{ cursor: "pointer" }}
        onClick={handleSearch}
        className="search-icon"
        src={searchicon}
        alt="search"
      ></img>
    </form>
  );
};

export default Search;
