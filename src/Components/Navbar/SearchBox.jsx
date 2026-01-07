
import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm }) => (
  <div className="search-box">
    <input
      type="text"
      placeholder="Search TRS News"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      autoComplete="off"
    />
    <button type="button">
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
);

export default SearchBox;
