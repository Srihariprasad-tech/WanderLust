const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const listingController=require("../controllers/listings.js"); // this  is mvc developemt requrie for the developmet

const multer=require('multer');
const {storage}=require("../cloudconfig.js");
const upload=multer({storage});


// INDEX ROUTE
router.get("/", wrapAsync(listingController.index)); //index function call

// NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm); // rendernew form is the function call//

// SHOW ROUTE
router.get("/:id", listingController.showListing);

//create listing
// router.post(
//     "/",
//     isLoggedIn,upload.single('listing[image]'),
//     (req, res, next) => {
//         console.log(req.body);
//         res.send(req.file);
//         next(); // pass control to next middleware
//     },
//     listingController.createListing
// );


// router.post("/", upload.single("listing[image]"), async (req, res) => {

//     console.log(req.body);
//     console.log(req.file);

//     let url = req.file.path;
//     let filename = req.file.filename;

//     let newListing = new Listing(req.body.listing);

//     newListing.image = {
//         url,
//         filename,
//     };

//     await newListing.save();

//     res.redirect("/listings");
// });



router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  async (req, res) => {

    let url = req.file.path;
    let filename = req.file.filename;

    let newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    newListing.image = {
      url,
      filename,
    };

    await newListing.save();

    req.flash("success", "New Listing Created!");

    res.redirect("/listings");
});






// EDIT ROUTE
router.get("/:id/edit", isLoggedIn, listingController.renderEditForm);

// UPDATE ROUTE
// router.put("/:id", isLoggedIn, upload.single("listing[image]"), listingController.updateListing);
router.put("/:id",
 upload.single("listing[image]"),
 async (req, res) => {

   let { id } = req.params;

   let listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true }
   );

   if(req.file){
      let url = req.file.path;
      let filename = req.file.filename;

      listing.image = {
         url,
         filename
      };

      await listing.save();
   }
console.log(req.file);

   req.flash("success", "Listing Updated!");
   res.redirect(`/listings/${id}`);
});



// DELETE ROUTE
router.delete("/:id", isLoggedIn,listingController.destoryListing);

module.exports = router;