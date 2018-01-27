import React from 'react';
import './City.css';

const City = ({ city, state, population }) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <li>
      <span className="name">{city}, {state}</span>
      <span className="population">{numberWithCommas(population)}</span>
    </li>
  );
};

export default City;