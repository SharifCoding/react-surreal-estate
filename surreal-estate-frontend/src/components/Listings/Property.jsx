import React from 'react';
import { number, string } from 'prop-types';

const Property = ({
  title, type, bedrooms, bathrooms, price, city, email,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src="http://via.placeholder.com/350x150?text=Property+Image" alt="property" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{type}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">£{price}</li>
      <li className="list-group-item">{bedrooms} bedroom(s)</li>
      <li className="list-group-item">{bathrooms} bathroom(s)</li>
      <li className="list-group-item">{city}</li>
    </ul>
    <div className="card-body">
      <a href={`mailto:${email}`} className="card-link">Email Agent</a>
    </div>
  </div>
);

Property.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  bedrooms: number.isRequired,
  bathrooms: number.isRequired,
  price: number.isRequired,
  city: string.isRequired,
};

export default Property;
