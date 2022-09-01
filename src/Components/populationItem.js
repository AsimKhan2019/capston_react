import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';

const PopulationItem = (props) => {
  const {
    Id, State, Population,
  } = props;
  return (
    <div className="popItem" id={Id}>
      <div className="img">
        <img alt={State} src="" />
        <Icon />
      </div>
      <h2>{State}</h2>
      <h4>{parseInt(Population, 10).toLocaleString()}</h4>
    </div>
  );
};

PopulationItem.propTypes = {
  Id: PropTypes.string.isRequired,
  State: PropTypes.string.isRequired,
  Population: PropTypes.string.isRequired,
};

export default PopulationItem;
