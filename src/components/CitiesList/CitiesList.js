import React from 'react';
import City from './../City/City';
import Aux from './../../hoc/Auxx/Auxx';
import './CitiesList.css';

const CitiesList = ({ matchingResults }) => {
  let CitiesList = (
    <Aux>
      <li>Filter for a city</li>
      <li>or a state</li>
    </Aux>
  );
  if (matchingResults.length > 0) {
    CitiesList = matchingResults.map((mr, index) => {
      return (
        <City key={index} {...mr} />
      );
    });
  }
  return (
    <div className="search-form">
      <ul className="suggestions">
        {CitiesList}
      </ul>
    </div>
  );
};

export default CitiesList;