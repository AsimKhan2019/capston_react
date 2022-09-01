import { configureStore } from '@reduxjs/toolkit';
import populationReducer from './Features/Population/populationSlice';

const store = configureStore({
  reducer: {
    population: populationReducer,
  },
});

export default store;
