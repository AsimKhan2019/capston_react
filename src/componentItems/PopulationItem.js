import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../icons';

const PopulationItem = (props) => {
  const {
    Id, State, Population,
  } = props;

  const img = `/assets/img/maps/${State}.svg`;

  return (
    <Link to={`/details/${Id}`}>
      <div className="popItem" id={Id}>
        <div className="img">
          <img alt={State} src={img} />
          <Icon />
        </div>
        <h2>{State}</h2>
        <h4>{parseInt(Population, 10).toLocaleString()}</h4>
      </div>
    </Link>
  );
};

PopulationItem.propTypes = {
  Id: PropTypes.string.isRequired,
  State: PropTypes.string.isRequired,
  Population: PropTypes.string.isRequired,
};

export default PopulationItem;
