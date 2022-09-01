import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { Id, State, Population } = props;
  return (
    <div className="hero">
      <img alt={State} href="" />
      <div className="content" id={Id}>
        <h2>{State}</h2>
        <h3>{parseInt(Population, 10).toLocaleString()}</h3>
      </div>
    </div>
  );
};

Hero.propTypes = {
  Id: PropTypes.string.isRequired,
  State: PropTypes.string.isRequired,
  Population: PropTypes.string.isRequired,
};

export default Hero;
