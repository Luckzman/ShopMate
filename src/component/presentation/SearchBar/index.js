import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.scss';

class SearchBar extends Component {

  state = {
    searchInput: '',
    error: false,

  }

  /**
   * @method handleChange
   * @description This method get user input value from input element
   * @param {object} event This is the event object
   * @return {null}
   */
  handleChange = (event) => {
    this.setState({searchInput: event.target.value})
  }

  /**
   * @method handleSubmit
   * @description This handle submission of searched data by calling the  action searchProduct dispatcher
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { searchProduct } = this.props;
    const { searchInput } = this.state;
    if(searchInput.length !== 0) {
      searchProduct(searchInput);
    }
  }
  /**
   * @method clearInput
   * @description This clear input text 
   * @returns {null}
   */
  clearInput = () => {
    this.setState({searchInput: ''})
  }

  render() {
    const {searchInput, error} = this.state; 
    return (
      <div className="search-bar">
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