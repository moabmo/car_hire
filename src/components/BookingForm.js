import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', date: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Booking Confirmed');
    // You would typically send the form data to your server here
  };

  return (
    <div className="booking-form">
      <h1>Book Car {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
