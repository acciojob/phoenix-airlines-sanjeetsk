import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBookingDetails } from '../redux/bookingSlice';

const FlightBookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!name || !email || !phone) {
      alert('Please fill all fields.');
      return;
    }

    const details = { name, email, phone };
    dispatch(setBookingDetails(details));
    navigate('/confirmation');
  };

  return (
    <div className="container">
      <h2>Passenger Details</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default FlightBookingPage;