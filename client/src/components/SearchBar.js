import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="form-wrapper">
      <form onSubmit={props.handleSearch}>
        <input type="text" name="search" placeholder="search image" onChange={props.inputSearch}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;
