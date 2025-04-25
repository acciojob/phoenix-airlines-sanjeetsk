import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container'>
      <h1>Welcome to Flight Booking App</h1>
      <Link to={'/flight-search'}><button>Search Flights Here</button></Link>
    </div>
  )
}

export default LandingPage
