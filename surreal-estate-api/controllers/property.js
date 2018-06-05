const User = require('../models/property');

const create = (req, res) => {
  const user = new User({
    title: req.body.title,
    type: req.body.type,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    price: req.body.price,
    city: req.body.city,
    email: req.body.email,
  });

  user.save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = {
  create,
};
