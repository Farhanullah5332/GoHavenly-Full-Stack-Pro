const Listing = require("../Models/listings");
const Review = require("../Models/review");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let { rating, reviewText, createdAt } = req.body;
  let newReview = new Review({
    rating,
    reviewText,
    createdAt,
  });
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "Review created");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destoryReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted");
  res.redirect(`/listings/${id}`);
};
