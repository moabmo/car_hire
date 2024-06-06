import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const featuredCars = [
  { id: 1, name: 'Toyota Corolla', description: 'Reliable and fuel-efficient' },
  { id: 2, name: 'Ford Mustang', description: 'Powerful and stylish' },
  // Add more featured cars as needed
];

const testimonials = [
  { id: 1, name: 'John Doe', text: 'Great service and reliable cars!' },
  { id: 2, name: 'Jane Smith', text: 'Affordable prices and excellent customer support.' },
  // Add more testimonials as needed
];

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Cruise Control Rentals & Logistics</h1>
        <p>Your one-stop solution for car rentals and logistics.</p>
      </section>
      <section className="featured-cars">
        <h2>Featured Cars</h2>
        <div className="car-list">
          {featuredCars.map(car => (
            <div key={car.id} className="car-item">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <Link to={`/car/${car.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-item">
              <p>"{testimonial.text}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
