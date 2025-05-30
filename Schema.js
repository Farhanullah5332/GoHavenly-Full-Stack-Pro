const Joi = require("joi");

const validateListing = Joi.object({
  listing: Joi.object({
    title: Joi.string().trim().min(5).max(50).required(),
    description: Joi.string().trim().min(20).max(200).required(),
    image: Joi.object({
      url: Joi.string().uri().required(),
      filename: Joi.string().required(),
    }).optional(),
    category: Joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Castles",
        "Arctic",
        "Camping",
        "Farms",
        "Beach"
      )
      .optional(),
    price: Joi.number().min(1).required(),
    location: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
  }).required(),
});

const validateReview = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    reviewText: Joi.string().trim().required(),
    createdAt: Joi.date().default(() => new Date()),
  }).required(),
});

module.exports = { validateListing, validateReview };
