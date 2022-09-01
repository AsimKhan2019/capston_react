import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../Components/Hero';
import PopulationContainer from '../Components/PopulationContainer';
import { getPopulationItems } from '../Features/Population/populationSlice';

const Home = () => {
  const dispatch = useDispatch();

  const populationItem = useSelector((store) => store.population.populationItem);

  useEffect(() => {
    if (populationItem.length === 0) dispatch(getPopulationItems());
  }, []);

  if (populationItem.length !== 0) {
    const heroPopulation = populationItem[0];
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
