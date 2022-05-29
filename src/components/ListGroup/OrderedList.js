import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const OrderedlistStyle = styled.ul`
  @counter-style dotless-item {
    system: numeric;
    symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
    suffix: " ";
  }
  content: counter(list-item) "\A0";
  float: left;
  text-align: right;
  width: 1.5em;
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
