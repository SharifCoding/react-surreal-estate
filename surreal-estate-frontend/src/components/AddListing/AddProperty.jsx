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
        propertyTypeSelect: '',
        bedroomInput: '',
        bathroomInput: '',
        price: '',
        citySelect: '',
        email: '',
      },
      propertyTitleValid: false,
      propertyTypeValid: false,
      bedroomValid: false,
      bathroomValid: false,
      priceValid: false,
      cityValid: false,
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
    let propertyTypeValid = this.state.propertyTypeValid; // eslint-disable-line
    let bedroomValid = this.state.bedroomValid; // eslint-disable-line
    let bathroomValid = this.state.bathroomValid; // eslint-disable-line
    let priceValid = this.state.priceValid; // eslint-disable-line
    let cityValid = this.state.cityValid; // eslint-disable-line
    let emailValid = this.state.emailValid; // eslint-disable-line prefer-destructuring

    switch (fieldName) {
      case 'propertyTitle':
        propertyTitleValid = value.length >= 10;
        fieldValidationErrors.propertyTitle = propertyTitleValid ? '' : ' should have at least 80 characters';
        break;
      case 'propertyTypeSelect':
        propertyTypeValid = value !== 'none';
        fieldValidationErrors.propertyTypeSelect = propertyTypeValid ? '' : ' should be selected from the list';
        break;
      case 'bedroomInput':
        bedroomValid = value >= 0;
        fieldValidationErrors.bedroomInput = bedroomValid ? '' : ' should be a positive number';
        break;
      case 'bathroomInput':
        bathroomValid = value >= 1;
        fieldValidationErrors.bathroomInput = bathroomValid ? '' : ' should be a positive number';
        break;
      case 'price':
        priceValid = (value >= 100000) && (value <= 250000);
        fieldValidationErrors.price = priceValid ? '' : ' should be between £100k and £250k';
        break;
      case 'citySelect':
        cityValid = value !== 'none';
        fieldValidationErrors.citySelect = cityValid ? '' : ' should be selected from the list';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is not valid contact detail';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      propertyTitleValid,
      propertyTypeValid,
      bedroomValid,
      bathroomValid,
      priceValid,
      cityValid,
      emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.propertyTitleValid
      && this.state.propertyTypeValid
      && this.state.bedroomValid
      && this.state.bathroomValid
      && this.state.priceValid
      && this.state.cityValid
      && this.state.emailValid,
    });
  }

  handleSubmit() {
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      propertyTitle: this.state.title,
      propertyTypeSelect: this.state.type,
      bedroomInput: this.state.bedrooms,
      bathroomInput: this.state.bathrooms,
      price: this.state.price,
      citySelect: this.state.city,
      email: this.state.email,
    })
      .then(() => {
        this.prop.history.push('/');
      });
  }

  render() {
    return (
      <div className="add-property-container">
        <form action="http://localhost:3000/api/v1/PropertyListing" method="post">
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
