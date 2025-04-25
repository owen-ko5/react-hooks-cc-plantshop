import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;