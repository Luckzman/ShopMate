import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Toaster from '../Toaster';
import './SearchBar.scss';

class SearchBar extends Component {

  state = {
    searchInput: '',
    error: false,

  }

  handleChange = (event) => {
    this.setState({searchInput: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchProduct } = this.props;
    const { searchInput } = this.state;
    if(searchInput.length !== 0) {
      searchProduct(searchInput);
    }
  }

  clearInput = () => {
    this.setState({searchInput: ''})
  }
  render() {
    const {searchInput, error} = this.state; 
    return (
      <div className="search-bar">
        {/* {error && <Toaster message="please enter a search parameter" />} */}
        <form onSubmit={this.handleSubmit}>
          <input
            name="searchInput"
            value={searchInput}
            placeholder="search anything"
            onChange={this.handleChange}
           />
        </form>
        <FontAwesomeIcon icon={faSearch} className="search" onClick={this.handleSubmit} />
        <FontAwesomeIcon icon={faTimes} className="times" onClick={this.clearInput} />
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchProduct: PropTypes.func.isRequired,
}

export default SearchBar