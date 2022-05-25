import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const UnOrderedlistStyle = styled.ol`
  .dropbtn {
    font-size: 16px;
  }
`;
const UnOrderedlist = ({ title, content }) => {
  return (
    <UnOrderedlistStyle>
      <ol className="dropdown">hello</ol>
    </UnOrderedlistStyle>
  );
};

UnOrderedlist.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default UnOrderedlist;
