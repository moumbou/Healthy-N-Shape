// importing modules 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email: {type: String, required:true, unique:true},
    username : {type: String, unique: true, required:true},
    avatar : String,
});

// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose);

// export userschema 
module.exports = mongoose.model("User", UserSchema); 
