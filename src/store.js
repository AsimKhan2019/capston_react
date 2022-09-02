import { configureStore } from '@reduxjs/toolkit';
import populationReducer from './features/population/populationSlice';

const store = configureStore({
  reducer: {
    population: populationReducer,
  },
});

export default store;
