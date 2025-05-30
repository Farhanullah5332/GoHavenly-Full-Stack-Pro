const Listing = require("../Models/listings");

// module.exports.index = async (req, res) => {
//   const allListings = await Listing.find();
//   res.render("listings/index.ejs", { allListings });
// };

module.exports.index = async (req, res) => {
  const { category } = req.query;
        const filter = category ? { category } : {};
        const allListings = await Listing.find(filter); 
        res.render("listings/index.ejs", { allListings, selectedCategory: category || "" });

};
module.exports.showListings = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};
module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const { title, description, image, category, price, location, country } = req.body;
  const newListing = new Listing({
    title,
    description,
    image: { url, filename },
    category,
    price,
    location,
    country,
    owner: req.user._id,
  });
  await newListing.save();
  req.flash("success", "Listing created");
  res.redirect("/listings");
};
module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const { title, description, image, category, price, location, country } = req.body;
  updateListing = await Listing.findByIdAndUpdate(id, { ...req.body });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updateListing.image = { url, filename };
    await updateListing.save();
  }
  req.flash("success", "Listing updated");
  res.redirect(`/listings/${id}`);
};
module.exports.destoryListing = async (req, res) => {
  const { id } = req.params;
  const deleteListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};
