
import React from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Provider } from "react-redux";
import store from '../redux/store';
import FlightSearchPage from "../pages/FlightSearchPage";
import FlightBookingPage from "../pages/FlightBookingPage";
import ConfirmationPage from "../pages/ConfirmationPage";

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/flight-search' element={<FlightSearchPage />} />
        <Route path='/flight-booking' element={<FlightBookingPage />} />
        <Route path='/flight-confirmation' element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
