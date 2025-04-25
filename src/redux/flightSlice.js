import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    tripType: '',
    source: '',
    destination: '',
    date: '',
    returnDate: '',
  },
  reducers: {
    setFlightSearch: (state, action) => {
      const { tripType, source, destination, date, returnDate } = action.payload;
      state.tripType = tripType;
      state.source = source;
      state.destination = destination;
      state.date = date;
      state.returnDate = returnDate;
    },
  },
});

export const { setFlightSearch } = flightSlice.actions;
export default flightSlice.reducer;
