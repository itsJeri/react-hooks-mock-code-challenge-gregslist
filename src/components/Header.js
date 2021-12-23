import React from "react";
import Search from "./Search";

function Header({ setSearch, sortListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearch={setSearch}
        sortListings={sortListings}
      />
    </header>
  );
}

export default Header;
