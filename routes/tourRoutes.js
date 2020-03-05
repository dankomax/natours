const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updatetTour,
  deleteTour,
  checkId
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

router.param('id', checkId);

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
