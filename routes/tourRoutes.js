const express = require('express');
const {
  getAllTours,
  getTourStats,
  getMonthlyPlan,
  aliasTopTours,
  createTour,
  getTour,
  updatetTour,
  deleteTour
  // checkId,
  // checkBody
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

// router.param('id', checkId);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

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
