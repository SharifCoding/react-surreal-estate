import React from 'react';
import propTypes from 'prop-types';

const options = ['Manchester', 'Liverpool', 'Sheffield', 'Leeds', 'All'];

const Sidebar = props => (
  <nav className="bg-secondary sidebar">
    <ul className="nav nav-pills flex-column">

      <li className="nav-item">
        <a className="nav-link" href="#">Sort by:</a>
        <select
          className="form-control"
          onChange={(event) => {
            props.orderByPrice(event.target.value);
          }}
          id="exampleFormControlSelect1"
        >
          <option value="ascending">Price Ascending</option>
          <option value="descending">Price Descending</option>
        </select>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Filter by City:</a>
      </li>
      {options.map(option => (
        <li className="nav-item" key={option}>
          <a className="nav-link" href="#" onClick={() => props.onCityClick(option)}>{option}</a>
        </li>))}
    </ul>
  </nav>
);

Sidebar.propTypes = {
  onCityClick: propTypes.func.isRequired,
  orderByPrice: propTypes.func.isRequired,
};

export default Sidebar;
