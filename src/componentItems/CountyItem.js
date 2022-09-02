import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../icons';

const CountyItem = (props) => {
  const {
    Id, Name, Population,
  } = props;
  return (
  // <Link to={`/details/${Id}`}>
    <div className="countyItem" id={Id}>
      <h2>{Name}</h2>
      <h4>{parseInt(Population, 10).toLocaleString()}</h4>
      <Icon />
    </div>
  // </Link>
  );
};

CountyItem.propTypes = {
  Id: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Population: PropTypes.string.isRequired,
};

export default CountyItem;
