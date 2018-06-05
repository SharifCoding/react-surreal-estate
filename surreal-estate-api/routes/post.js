const express = require('express');
const PropertyListingController = require('../controllers/property');

const router = express.Router();

router.route('/')
  .post(PropertyListingController.create);

module.exports = router;
