// https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
import React from 'react';
import PropTypes from 'prop-types';

export const FormErrors = ({ formErrors }) =>
  (
    <div className="formErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        );
      }
        return '';
    })}
    </div>
  );

FormErrors.propTypes = {
  formErrors: PropTypes.shape({
    propertyTitleValid: PropTypes.bool,
    propertyTypeValid: PropTypes.bool,
    bedroomValid: PropTypes.bool,
    bathroomValid: PropTypes.bool,
    priceValid: PropTypes.bool,
    cityValid: PropTypes.bool,
    emailValid: PropTypes.bool,
  }).isRequired,
};

export default FormErrors;
