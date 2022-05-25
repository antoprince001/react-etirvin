import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const OrderedlistStyle = styled.ul`
  .dropbtn {
    font-size: 16px;
  }
`;
const Orderedlist = ({ title, content }) => {
  return (
    <OrderedlistStyle>
      <ul className="dropdown">Hello</ul>
    </OrderedlistStyle>
  );
};

Orderedlist.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Orderedlist;
