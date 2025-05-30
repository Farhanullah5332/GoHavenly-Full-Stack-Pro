const express = require("express");
const router = express.Router();
const { validateListing } = require("../Schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const AppError = require("../utils/appError.js");
const Listing = require("../Models/listings.js");
const { isloggedIn, isOwner } = require("../middleware.js");
const listingController = require("../Controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const validateListingMiddleware = (req, res, next) => {
  let { error } = validateListing.validate({ listing: req.body });
  if (error) {
    throw new AppError(400, error);
  } else {
    next();
  }
};

// Routes

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isloggedIn,
    upload.single("image"),
    validateListingMiddleware,
    wrapAsync(listingController.createListing)
  );

router.get(
  "/new",
  isloggedIn,
  wrapAsync((req, res) => {
    res.render("listings/new");
  })
);
router.get(
  "/about",
  wrapAsync((req, res) => {
    res.render("listings/about");
  })
);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(
    isloggedIn,
    isOwner,
    upload.single("image"),
    validateListingMiddleware,
    wrapAsync(listingController.updateListing)
  )
  .delete(isloggedIn, wrapAsync(listingController.destoryListing));

router.get("/:id/edit", isloggedIn, wrapAsync(listingController.editListing));

module.exports = router;
