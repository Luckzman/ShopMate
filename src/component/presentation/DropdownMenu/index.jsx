import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {logout} from '../../../utils/authHelper';
import './DropdownMenu.scss';

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

export default DropdownMenu;
