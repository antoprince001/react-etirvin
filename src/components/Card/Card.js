import React  from 'react';
import PropTypes from 'prop-types'
import './CardStyle.css';

const Card = ({ title, content }) => {
  
    return (
        <div className="card">
            <div className="cardHead">
                {title}
            </div>
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg" alt="Sample img" className="cardImg" ></img>
            <div className="cardBody">
                {content}
            </div>
        </div>
    );
  };
  
Card.propTypes  = {
  title : PropTypes.string,
  content : PropTypes.string
}

export default Card;