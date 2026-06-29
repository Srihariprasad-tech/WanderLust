const mongoose = require("mongoose");
const Schema = mongoose.Schema; //used to build a schema//
const Review=require("./review.js"); //Because later we want to delete all reviews that belong to a deleted listing.
 // ./ measns local file
const listingSchema = new Schema({
    title: String,
    description: String,
   image: {
   filename: String,
   url: String,
},
    price: Number,
    location: String,
    country: String,
    reviews:[{
type:Schema.Types.ObjectId,
ref:"Review",
    }],
    owner:{
        type:Schema.Types.ObjectId, // stores user id//
        ref:"User",
    }
});

//post middleware//

//Delete Listing

//↓

//MongoDB deletes listing

//↓

//AFTER deletion


//Run this function
//Even though listing is deleted,
//mongoose still gives us a copy inside middleware. tht is listing in if conditon duw to middleware
listingSchema.post("findOneAndDelete", async (listing) => {

    if (listing && listing.reviews.length) {

        await Review.deleteMany({
            _id: { $in: listing.reviews } //$ in means deleting them in one query
        });

    }

});

const Listing = mongoose.model("Listing", listingSchema); //  sysntax cont modelname=mongoose.model("modelname",schemaname);
module.exports = Listing; // used to export model//

//model only intrect with the mongodb db
//Listing.find()

//Listing.findById()

//Listing.create()

//Listing.save()

//Listing.deleteOne()

//Listing.findOneAndDelete()