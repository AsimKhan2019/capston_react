import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../Components/Hero';
import PopulationContainer from '../Components/PopulationContainer';
import { getForAllProvinces } from '../Features/Population/populationSlice';

const Home = () => {
  const dispatch = useDispatch();

  const Provinces = useSelector((store) => store.population.Provinces);

  useEffect(() => {
    if (Provinces.length === 0) dispatch(getForAllProvinces());
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
