import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightSlice';
import bookingReducer from './bookingSlice';

const store = configureStore({
    reducer : {
        flight: flightReducer,
        booking: bookingReducer,
    },
});

export default store;