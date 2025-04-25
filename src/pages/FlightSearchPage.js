import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setFlightSearch } from '../redux/flightSlice';

function FlightSearchPage() {
  const [tripType, setTripType] = useState('one-way');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!source || !destination || !date) {
      alert('Please fill all the fields')
      return
    }
    if (tripType === 'round-trip' && !returnDate) {
      alert('Please fill return date')
      return
    }
    dispatch(setFlightSearch({ tripType, source, destination, date, returnDate }));
    navigate('/flight-booking');
  }
  return (
    <div className="container">
      <h2>Search Flights</h2>
      <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
        <option value="one-way">One-way</option>
        <option value="round-trip">Round-trip</option>
      </select>
      <input type="text" placeholder="Source City" value={source} onChange={(e) => setSource(e.target.value)} />
      <input type="text" placeholder="Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="book-flight" onClick={handleSearch}>Search & Book</button>
    </div>
  )
}

export default FlightSearchPage