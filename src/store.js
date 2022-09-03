import { configureStore } from '@reduxjs/toolkit';
import populationReducer from './featureSlice/population/populationSlice';

const store = configureStore({
  reducer: {
    population: populationReducer,
  },
});

export default store;
