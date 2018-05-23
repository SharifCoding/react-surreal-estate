import React from 'react';
import './addProperty.scss';

const AddProperty = () => (
  <div className="add-property-container">
    <form>
      <div className="form-group row">
        <label htmlFor="propertyTitle" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="propertyTitle" placeholder="A catchy title for your listing" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="propertyTypeSelect" className="col-sm-2 col-form-label">Type</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="propertyTypeSelect"
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
          <input type="number" className="form-control" id="bedroomInput" placeholder="No of bedrooms" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="bathroomInput" className="col-sm-2 col-form-label">Bathrooms</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="bathroomInput" placeholder="No of bathrooms" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="price" placeholder="Price" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="citySelect" className="col-sm-2 col-form-label">City</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="citySelect"
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
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Contact email" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Add Listing</button>
        </div>
      </div>
    </form>
  </div>
);

export default AddProperty;
