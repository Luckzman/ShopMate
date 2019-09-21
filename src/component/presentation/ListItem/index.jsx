import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * @description This component render List Item of an array
 * 
 * @param {array} listArr
 * @param {JSX}
 */
const ListItem = ({ listArr }) => {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  }
  
  return (
    <ListGroup variant="flush">
      {
        listArr.map((item, index) => {
          return (
            <ListGroup.Item key={`${item} ${index}`} action onClick={alertClicked}>
              {item}
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

ListItem.propTypes = {
  listArr: PropTypes.array,
}
ListItem.defaultProps = {
  listArr: [],
}

export default ListItem;
