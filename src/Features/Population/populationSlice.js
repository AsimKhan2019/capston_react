import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  populationItem: [],
  state: 0,
  population: 0,
  isLoading: false,
};

const url = 'https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:*';

export const getPopulationItems = createAsyncThunk('population/getPopulationItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      // console.log(resp.data);
      resp.data.shift();
      const s = resp.data.map((a) => ({
        Id: a[2],
        State: a[0],
        Population: a[1],
      })).sort((a, b) => (parseInt(a.Population, 10) > parseInt(b.Population, 10) ? -1 : 0));
      // return resp.data;
      // console.log(s);
      return s;
    } catch (err) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const populationSlice = createSlice({
  name: 'population',
  initialState,
  // reducers: {
  //   clearPopulation: (state) => {
  //     state.population = [];
  //   },
  // },
  extraReducers: {
    // [getPopulationItems.pending]: (state) => {
    //   state.isLoading = false;
    // },
    [getPopulationItems.fulfilled]: (state, action) => {
    // console.log(action);
    // state.isLoading = false;
      state.populationItem = action.payload;
    },
    // [getPopulationItems.rejected]: (state, action) {}=> {
    //   // console.log(action);
    //   // state.isLoading = false;
    // },
  },
});

// export const { clearPopulation } = populationSlice.actions;

export default populationSlice.reducer;
