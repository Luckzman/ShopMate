import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * @description This component render List Item of an array
 * @param {object} props
 * @param {JSX}
 */
const ListItem = ({ listArr, selectedItem }) => {
  
  return (
    <ListGroup variant="flush">
      {
        listArr && listArr.map((item, index) => {
          return (
            <ListGroup.Item key={`${item} ${index}`} action onClick={() => selectedItem(index+1, item)}>
              {item.name}
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

ListItem.propTypes = {
  listArr: PropTypes.array.isRequired,
  selectedItem: PropTypes.func.isRequired,
}

export default ListItem;
