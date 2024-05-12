const express = require("express");
const joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const genAuthToken  = require("../utils/genAuthToken");

const router = express.Router();

router.post("/",async (req,res)=>{
    const schema = joi.object({
        email:joi.string().min(5).max(50).required().email(),
        password:joi.string().min(6).max(300).required()
    })

    const {error} = schema.validate(req.body);
    if(error)return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("user not exist.")

   const isValid = await bcrypt.compare(req.body.password,user.password);
   if(!isValid) return res.status(400).send("User validation failed")

    
    const token = genAuthToken(user);
    res.send(token);
});

module.exports = router;