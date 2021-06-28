import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const ClickDropdownStyle = styled.div`
.accordion {
  max-width: 600px;
  margin: 2rem auto;
}

.accordion-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: #21aeca;
}

.accordion-title:hover {
  background-color: #3ab4cc;
}

.accordion-title,
.accordion-content {
  padding: 1rem;
}

.accordion-content {
  background-color: #39b9d2;
}

@media screen and (max-width: 700px) {
  

  .accordion {
    width: 90%;
  }
}
`
const ClickDropdown = ({ title, content }) => {
  
    return (
      <ClickDropdownStyle className="accordion-item">
        <div className="accordion-title {isActive}" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        
      </ClickDropdownStyle>
    );
  };
  
ClickDropdown.propTypes  = {
  title : PropTypes.string,
  content : PropTypes.string
}

export default ClickDropdown;