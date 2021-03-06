import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HoverDropdownStyle = styled.div`
  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
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
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 10px 14px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
    font-size: 16px;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #3ab4cc;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
    border-radius: 10px;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #39b9d2;
  }
`;
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

HoverDropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default HoverDropdown;
