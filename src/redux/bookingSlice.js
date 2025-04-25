import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },
    reducers: {
        setBookingDetails: (state, action) => {
            const { firstName, lastName, email, phone } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.phone = phone;
        },
    },
})

export const { setBookingDetails } = bookingSlice.actions; 
export default bookingSlice.reducer;