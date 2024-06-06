import React from 'react';
import { useParams, Link } from 'react-router-dom';

const carDetails = {
  1: { name: 'Toyota Corolla', description: 'Reliable and fuel-efficient', price: 'Kes. 3,5000/day' },
  2: { name: 'Ford Mustang', description: 'Powerful and stylish', price: 'Kes. 4,000/day' },
  // Add more car details as needed
};

function CarDetails() {
  const { id } = useParams();
  const car = carDetails[id];

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div className="car-details">
      <h1>{car.name}</h1>
      <p>{car.description}</p>
      <p>{car.price}</p>
      <Link to={`/book/Kes{id}`}>Book Now</Link>
    </div>
  );
}

export default CarDetails;
