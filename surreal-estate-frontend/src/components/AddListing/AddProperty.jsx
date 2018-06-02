import React from 'react';
import axios from 'axios';

import { FormErrors } from './ValidListing';

import './addProperty.scss';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyTitle: '',
      propertyTypeSelect: '',
      bedroomInput: '',
      bathroomInput: '',
      price: '',
      citySelect: '',
      email: '',
      formErrors: {
        propertyTitle: '',
        email: '',
      },
      propertyTitleValid: false,
      emailValid: false,
      formValid: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { id, value } = event.target;
    this.setState(
      { [id]: value },
      () => { this.validateField(id, value); },
    );
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let propertyTitleValid = this.state.propertyTitleValid; // eslint-disable-line
    let emailValid = this.state.emailValid; // eslint-disable-line prefer-destructuring

    switch (fieldName) {
      case 'propertyTitle':
        propertyTitleValid = value.length >= 6;
        fieldValidationErrors.propertyTitle = propertyTitleValid ? '' : ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      propertyTitleValid,
      emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.propertyTitleValid && this.state.emailValid,
    });
  }

  handleSubmit() {
    axios.post('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          propertyTitle: response.data.title,
          propertyTypeSelect: response.data.type,
          bedroomInput: response.data.bedrooms,
          bathroomInput: response.data.bathrooms,
          price: response.data.price,
          citySelect: response.data.city,
          email: response.data.email,
        });
      }).catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div className="add-property-container">
        <form>
          <div className="form-group row">
            <label htmlFor="propertyTitle" className="col-sm-2 col-form-label">Title</label>
            <div className={`col-sm-10 ${this.state.formErrors.propertyTitle}`}>
              <input
                type="text"
                className="form-control"
                id="propertyTitle"
                placeholder="A catchy title for your listing"
                value={this.state.propertyTitle}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="propertyTypeSelect" className="col-sm-2 col-form-label">Type</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="propertyTypeSelect"
                value={this.state.propertyTypeSelect}
                onChange={this.handleInputChange}
              >
                <option value="none">Select one option</option>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bedroomInput" className="col-sm-2 col-form-label">Bedrooms</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="bedroomInput"
                placeholder="No of bedrooms"
                value={this.state.bedroomInput}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bathroomInput" className="col-sm-2 col-form-label">Bathrooms</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="bathroomInput"
                placeholder="No of bathrooms"
                value={this.state.bathroomInput}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="citySelect" className="col-sm-2 col-form-label">City</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="citySelect"
                value={this.state.citySelect}
                onChange={this.handleInputChange}
              >
                <option value="none">Select city</option>
                <option value="Manchester">Manchester</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Leeds">Leeds</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className={`col-sm-10 ${this.state.formErrors.email}`}>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Contact email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.formValid}
                onClick={() => this.state.handleSubmit}
              >Add Listing
              </button>
            </div>
          </div>
          <div className="alert alert-warning" role="alert">
            Please provide listing data.
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          {/* <div className="alert alert-danger" role="alert">
            Sorry, something went wrong. Please try again. (API Error)
          </div>
          <div className="alert alert-success" role="alert">
            Property saved.
          </div> */}
        </form>
      </div>
    );
  }
}

// export library
export default AddProperty;
