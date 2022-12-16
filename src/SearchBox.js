import React from "react";

const SearchBox = ({onSearchChange}) => {
    return (
      <div className="search-box">
        <input
          type="search"
          PlaceHolder="search robots"
          onChange={onSearchChange} />
      </div>
    );
  }


export default SearchBox;
