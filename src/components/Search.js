import React from "react";

function Search({searchTerm, onChangeSearch}) {

  function handleChange(event) {
    onChangeSearch(event.target.value)
  }
  // create event handler for search using setSearchTerm state function
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  value={searchTerm} onChange ={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}
// assign value of input to searchTerm state variable and change to event handler
export default Search;