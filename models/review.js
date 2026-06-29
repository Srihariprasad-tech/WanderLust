const mongoose = require("mongoose");
const Schema = mongoose.Schema; //used to build a schema//

const reviewSchema=new Schema({
    comment:String,
   rating: {
        type: Number,
        min: 1,
        max: 5
    },
       author: {
     type: Schema.Types.ObjectId,
     ref: "User"
   },
    createdAt:
    {
        type:Date,
        default:Date.now,
    }
});
module.exports=mongoose.model("Review",reviewSchema);

