const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listings.js");
const { validateReview } = require("../Schema.js");
const { isloggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../Controllers/review.js");

const validateReviewsMiddleware = (req, res, next) => {
  let { error } = validateReview.validate({ review: req.body });
  if (error) {
    throw new AppError(400, error);
  } else {
    next();
  }
};
// reviews
router.post(
  "/",
  isloggedIn,
  validateReviewsMiddleware,
  wrapAsync(reviewController.createReview)
);

// deleteReview
router.delete(
  "/:reviewId",
  isloggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destoryReview)
);

module.exports = router;
