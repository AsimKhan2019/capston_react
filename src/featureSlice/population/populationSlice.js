import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Provinces: [],
  state: 0,
  population: 0,
  isLoading: false,
};

const url = 'https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:*';
const countyurl = 'https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=county:*&in=state:';

export const getForAllProvinces = createAsyncThunk('population/getForAllProvinces',
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      resp.data.shift();
      const s = resp.data.map((a) => ({
        Id: a[2],
        State: a[0],
        Population: a[1],
        Counties: [],
      })).sort((a, b) => (parseInt(a.Population, 10) > parseInt(b.Population, 10) ? -1 : 0));
      return s;
    } catch (err) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const getCountiesForProvince = createAsyncThunk('population/getCountiesforProvince',
  async (id, thunkAPI) => {
    try {
      const fetchurl = countyurl + id;
      const response = await axios(fetchurl);
      response.data.shift();
      const county = response.data.map((c) => ({
        Id: c[3],
        Name: c[0].split(' County,')[0],
        Population: c[1],
        ProvinceId: c[2],
      })).sort((a, b) => (parseInt(a.Population, 10) > parseInt(b.Population, 10) ? -1 : 0));
      return county;
    } catch (err) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const populationSlice = createSlice({
  name: 'population',
  initialState,
  extraReducers: {
    [getForAllProvinces.fulfilled]: (state, action) => {
      state.Provinces = action.payload;
    },
    [getCountiesForProvince.fulfilled]: (state, action) => {
      state.Provinces.find((p) => p.Id === action.payload[0].ProvinceId).Counties = action.payload;
    },
  },
});

export default populationSlice.reducer;
