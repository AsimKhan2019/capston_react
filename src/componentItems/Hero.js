import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  const { Id, State, Population } = props;
  const img = `/assets/img/maps/${State}.svg`;
  return (
    <Link to={`/details/${Id}`}>
      <div className="hero">
        <img src={img} alt={State} />
        <div className="content" id={Id}>
          <h2>{State}</h2>
          <h3>{parseInt(Population, 10).toLocaleString()}</h3>
        </div>
      </div>
    </Link>
  );
};

Hero.propTypes = {
  Id: PropTypes.string.isRequired,
  State: PropTypes.string.isRequired,
  Population: PropTypes.string.isRequired,
};

export default Hero;
