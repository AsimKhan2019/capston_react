import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../componentItems/Hero';
import PopulationContainer from '../componentItems/PopulationContainer';
import { getForAllProvinces } from '../featureSlice/population/populationSlice';
import { setTitle } from '../featureSlice/navbar/navbarSlice';

const Home = () => {
  const dispatch = useDispatch();

  const Provinces = useSelector((store) => store.population.Provinces);

  useEffect(() => {
    if (Provinces.length === 0) dispatch(getForAllProvinces());
    dispatch(setTitle('US Population'));
  }, []);

  if (Provinces.length !== 0) {
    const heroPopulation = Provinces[0];
    return (
      <section className="homeContainer">
        <Hero
          Id={heroPopulation.Id}
          State={heroPopulation.State}
          Population={heroPopulation.Population}
        />
        <p>STATS BY COUNTY</p>
        <PopulationContainer />
      </section>
    );
  }

  return (<div />);
};

export default Home;
