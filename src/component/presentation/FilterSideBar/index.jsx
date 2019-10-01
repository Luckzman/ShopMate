import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListItem from '../ListItem';

/**
 * @description FilterSideBar Component - This is needed to filter products by category and by product
 * @param {object} props
 * @returns {JSX}
 */
const FilterSideBar = ({category, department, selectedProduct}) => {
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <p>Categories</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ListItem listArr={category} selectedItem={selectedProduct}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Departments
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ListItem listArr={department} selectedItem={selectedProduct} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
}

FilterSideBar.propTypes = {
  category: PropTypes.array.isRequired,
  department: PropTypes.array.isRequired,
  selectedProduct: PropTypes.func.isRequired
}

export default FilterSideBar;
