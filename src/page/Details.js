import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Hero from '../componentItems/Hero';
import { getCountiesForProvince } from '../featureSlice/population/populationSlice';
import CountyContainer from '../componentItems/CountyContainer';

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const Provinces = useSelector((store) => store.population.Provinces);
  const province = Provinces.find((r) => r.Id === id);

  useEffect(() => {
    if (province.Counties.length === 0) dispatch(getCountiesForProvince(id));
  }, []);

  return (
    <section className="homeContainer detail">
      <Hero
        Id={province.Id}
        Population={province.Population}
        State={province.State}
      />
      <p>
        COUNTIES breakdown - 2019
      </p>
      <CountyContainer provinceId={id} />
    </section>
  );
};

export default Details;
