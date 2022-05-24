import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const UnOrderedlistStyle = styled.ol`
  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
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
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
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
const UnOrderedlist = ({ title, content }) => {
  return (
    <UnOrderedlistStyle>
      <ol className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <ol className="dropdown-content">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
        </ol>
      </ol>
    </UnOrderedlistStyle>
  );
};

UnOrderedlist.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default UnOrderedlist;
