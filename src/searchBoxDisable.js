import React from "react";

class SearchBoxDisable extends React.Component {
    render() {
      const {onSearchChange} = this.props
    return (
      <div>
        <input
          type="search"
          PlaceHolder="search robots"
          onChange={onSearchChange}
          // disabled
        />
      </div>
    );
  }
}
export default SearchBoxDisable;
