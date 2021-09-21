const express = require('express');
const BiciRoute = express.Router();

// Bici Model
let BicisModels = require('../models/Bicicletas');

// API -> Listalas bicicicletas
BiciRoute.route('/').get((req, res) => {
  BicisModels.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 // INSERT BICI
 BiciRoute.route('/create-bici').post((req, res, next) => {
  BicisModels.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// EDIT BICI
BiciRoute.route('/edit-bici/:id').get((req, res) => {
  BicisModels.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//UPDATE 
BiciRoute.route('/update-bici/:id').post((req, res, next) => {
  BicisModels.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Bici actualizada xd !')
    }
  })
})

// Eliminar bici
BiciRoute.route('/delete-bici/:id').delete((req, res, next) => {
  BicisModels.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = BiciRoute;