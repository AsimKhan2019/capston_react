import { configureStore } from '@reduxjs/toolkit';
import populationReducer from './featureSlice/population/populationSlice';
import navbarReducer from './featureSlice/navbar/navbarSlice';

const store = configureStore({
  reducer: {
    population: populationReducer,
    navbar: navbarReducer
  },
});

export default store;
