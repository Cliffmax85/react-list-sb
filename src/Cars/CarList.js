import React from 'react';
import Car from './Car';

export default function CarList({ cars }) {
  return <div>
    {cars.map((car, i) =>
      <Car key={`${car}-${i}`} 
        {...car} />
    )}
  </div>;
}
