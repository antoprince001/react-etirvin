import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    progress[value] {
        width : ${props => props.width};
        appearance : none;

        ::-webkit-progress-bar {
            height : 10px;
            border-radius : 20px;
            background-color : #eee;
        }
        ::-webkit-progress-value {
            height : 10px;
            border-radius : 20px;
            background-color : ${props => props.color};
        }
    }
`
const ProgressBar = props => {
    const {value,max} = props;
    return (
        <Container>
            <progress value={value} max={max} />
            <span> { (value / max )*100} %</span>
        </Container>
    )
}

ProgressBar.propTypes = {
    value : PropTypes.number.isRequired,
    max : PropTypes.number
}

ProgressBar.defaultProps = {
    max : 100
};

export default ProgressBar;