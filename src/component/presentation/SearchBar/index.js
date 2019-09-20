import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.scss';

const SearchBar = () => {

  return (
    <div className="search-bar">
      <form >
        <input placeholder="search anything" />
      </form>
      <FontAwesomeIcon icon={faSearch} className="search" />
      <FontAwesomeIcon icon={faTimes} className="times" />
    </div>
  )
}

export default SearchBar