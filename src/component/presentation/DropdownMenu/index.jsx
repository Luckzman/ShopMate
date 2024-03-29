import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import {logout} from '../../../utils/authHelper';
import './DropdownMenu.scss';

/**
 * @description Reusable DropdownMenu Component
 * @param {object} props
 * @returns {JSX}
 */
const DropdownMenu = ({name, handleProfileModal, handleShippingDetailsModal }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="drp-btn"  id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={handleProfileModal}>Update Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={handleShippingDetailsModal}>Update Shipping Information</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Update Credit Cart</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4" onClick={() => {logout()}}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

DropdownMenu.propTypes = {
  name: PropTypes.string.isRequired,
  handleProfileModal: PropTypes.func.isRequired,
  handleShippingDetailsModal: PropTypes.func.isRequired
}

export default DropdownMenu;
