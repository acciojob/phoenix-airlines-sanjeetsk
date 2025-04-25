import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const booking = useSelector((state) => state.booking);
  const flight = useSelector((state) => state.flight);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Phone:</strong> {booking.phone}</p>
      <hr />
      <p><strong>Trip Type:</strong> {flight.tripType}</p>
      <p><strong>From:</strong> {flight.source} <strong>To:</strong> {flight.destination}</p>
      <p><strong>Date:</strong> {flight.date}</p>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default ConfirmationPage;
