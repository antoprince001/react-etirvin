import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const HoverDropdownStyle = styled.div`
.dropbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

.dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #3ab4cc;}
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {display: block;}
  
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {background-color: #39b9d2;}
`
const HoverDropdown = ({ title, content }) => {
  
    return (
    <HoverDropdownStyle>
      <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
        </div>
    </div>
    </HoverDropdownStyle>
    );
  };
  
HoverDropdown.propTypes  = {
  title : PropTypes.string,
  content : PropTypes.string
}

export default HoverDropdown;