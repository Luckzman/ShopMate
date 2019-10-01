import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './ItemCard.scss';

/**
 * @description This component return a card of a single product
 * @param {object} props
 * @returns {JSX}
 */
const ItemCard = ({ name, thumbnail, price, id }) => {
  return (
    <div className="item-card">
      <img
        src={thumbnail}
        alt="product" />
      <p className="name">{name}</p>
      <p className="price">&pound; {price}</p>
      <Link to={`/product/${id}`}>Quick View</Link>
      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      <FontAwesomeIcon icon={faHeart} className="heart-icon2" />
    </div>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default ItemCard;
