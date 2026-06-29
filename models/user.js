const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose =
    require("passport-local-mongoose").default

const UserSchema = new Schema({
    email: {  //username and password is aoutomatically created by passport
        type: String,
        required: true,
    },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);