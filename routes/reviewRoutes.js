const express = require('express');
const reviewController = require('../controllers/reviewController.js');
const authController = require('./../controllers/authController.js');

const router = express.Router({ mergeParams: true });

// POST /tour/234fad4/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

router.route('/:id').delete(reviewController.deleteReview);
module.exports = router;
