import Nav from "./Nav";
import Search from "./Search";
import Main from "./Main";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("keyboard");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setSearch(inputValue);
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav />
      <Search
        search={search}
        setSearch={setSearch}
        handleInput={handleInput}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      <Main search={search} />
    </div>
  );
}

export default App;
