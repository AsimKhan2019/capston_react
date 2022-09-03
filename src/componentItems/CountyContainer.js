import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CountyItem from './CountyItem';

const CountyContainer = (props) => {
  const { provinceId } = props;
  const Provinces = useSelector((store) => store.population.Provinces);
  const province = Provinces.find((r) => r.Id === provinceId);

  const countyList = province.Counties.map((p) => (
    <CountyItem
      key={p.Id}
      Id={p.Id}
      Name={p.Name}
      Population={p.Population}
      ProvinceId={p.ProvinceId}
    />
  ));

  if (province.Counties.length !== 0) {
    return (
      <div className="countyItemContainer">
        {countyList}
      </div>
    );
  }

  return (<div />);
};

CountyContainer.propTypes = {
  provinceId: PropTypes.string.isRequired,
};

export default CountyContainer;
