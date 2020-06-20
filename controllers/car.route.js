let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// car Model
let carSchema = require('../models/Car');

// CREATE car
router.route('/create-car').post((req, res, next) => {
  carSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ cars
router.route('/').get((req, res) => {
  carSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Edit car
router.route('/edit-car/:id').get((req, res) => {
  carSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update car
router.route('/update-car/:id').put((req, res, next) => {
  carSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('car updated successfully !')
    }
  })
})

// Delete car
router.route('/delete-car/:id').delete((req, res, next) => {
  carSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Display cars older than 5 years
router.route('/older-cars').get((req, res) => {
  const filter = {
    'model': {
      '$lt': (2015)
    }
  };
  carSchema.find(filter, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = router;