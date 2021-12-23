import React, { useState } from "react";

function Search({ setSearch, sortListings }) {
  const [formData, setFormData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(formData)
  }

  return (
    <>

    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
    <button onClick={sortListings}>
      Sort by Location
    </button>
    </>

  );
}

export default Search;
