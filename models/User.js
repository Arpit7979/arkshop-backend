const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:20,
},
email:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50,
    unique:true,
},
password:{
    type:String,
    required:true,
    minlength:6,
    maxlength:300,
}
});

const User = mongoose.model("User",userSchema);

exports.User = User;