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




//UPDATE 
BiciRoute.route('/update-bici').post((req, res, next) => {
 
  BicisModels.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      
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