import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * @description This component render List Item of an array
 * 
 * @param {array} listArr
 * @param {JSX}
 */
const ListItem = ({ listArr, selectedItem }) => {
  
  return (
    <ListGroup variant="flush">
      {
        listArr.map((item, index) => {
          // console.log(item, 'item')
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
  listArr: PropTypes.array,
  selectedItem: PropTypes.func.isRequired,
}
ListItem.defaultProps = {
  listArr: [],
}

export default ListItem;
