import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';  // Correct import path


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
