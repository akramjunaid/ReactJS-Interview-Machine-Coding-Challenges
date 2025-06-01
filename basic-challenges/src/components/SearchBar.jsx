import React, { useState } from "react";

function SearchBar({ items }) {
  const [searchItem, setSearchItem] = useState("");
  const FiltereredItem = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {FiltereredItem.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
