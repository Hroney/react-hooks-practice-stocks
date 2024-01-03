import React, { useState } from "react";

function SearchBar({ sortByName, sortByPrice, filterByType }) {
  const [checked, setChecked] = useState(true)

  function handleCheck(e) {
    let buttonClicked = e.target.value
    if (buttonClicked === "Alphabetically") {
      sortByName()
    } else {
      sortByPrice()
    }
    setChecked(!checked)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checked}
          onChange={(e) => handleCheck(e)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={!checked}
          onChange={(e) => handleCheck(e)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => filterByType(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
