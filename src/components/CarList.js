import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Toyota Corolla', description: 'Reliable and fuel-efficient' },
  { id: 2, name: 'Ford Mustang', description: 'Powerful and stylish' },
  // Add more cars as needed
];

function CarList() {
  return (
    <div className="car-list">
      <h1>Available Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
