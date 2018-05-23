import React from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Property from './Property';
import './listings.scss';

class PropertyListings extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      initialListings: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          listings: response.data,
          initialListings: response.data,
        });
      }).catch((err) => {
        throw err;
      });
  }

  render() {
    const { initialListings, listings } = this.state;
    return (
      <React.Fragment>
        <div className="listings-container">
          <div className="sidebar">
            <Sidebar
              onCityClick={(cityName) => {
                if (cityName === 'All') {
                  this.setState({ listings: initialListings });
                  return;
                }
                const filteredProperties = initialListings
                  .filter(listing => listing.city === cityName);
                this.setState({ listings: filteredProperties });
              }}

              orderByPrice={(order) => {
                let orderedProperties;
                if (order === 'descending') {
                  orderedProperties = listings.sort((a, b) => a.price < b.price);
                } else {
                  orderedProperties = listings.sort((a, b) => a.price > b.price);
                }
                this.setState({ listings: orderedProperties });
              }}
            />
          </div>
          <div className="listings">
            {this.state.listings.map(listing => <Property key={listing._id} {...listing} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PropertyListings;
