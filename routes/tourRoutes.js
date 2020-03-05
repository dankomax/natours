const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updatetTour,
  deleteTour
} = require('../controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updatetTour)
  .delete(deleteTour);

module.exports = router;
