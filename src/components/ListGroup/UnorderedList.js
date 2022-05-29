import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const UnOrderedlistStyle = styled.ol`
  ${
    "" /* *list-style-type: decimal;
  margin-left: 0;
  counter-reset: customlistcounter;
  counter-increment: customlistcounter;
  content: counter(customlistcounter) " ";
  font-weight: bold;
  float: left;
  width: 3em; */
  }

  .dropbtn {
    font-size: 16px;
  }
`;
const UnOrderedlist = ({ title, content }) => {
  return (
    <UnOrderedlistStyle>
      <ol className="dropdown">hello</ol>
      <ol>Hello</ol>
    </UnOrderedlistStyle>
  );
};

UnOrderedlist.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default UnOrderedlist;
