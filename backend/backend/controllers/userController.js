import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
export const registerUser = async(req,res)=>{

     const {name,email,password,address}=req.body;

     const photo =  req.file? req.file.filename:""

        if(!name||!email||!password||!address||!photo){
            return res.status(400).send({
                success:false,
                message:"All fields are required"
            })
        }

        
    try {
           // find  if user is already registered
       let existingUser= await User.findOne({email:email});

       if(existingUser)
        return res.status(200).send({
             message:"User already registered"
    });

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt );

    const userData = await  new User ({
             name,
            email,
            password:hashedPassword,
            address,
            photo 
            
        }).save();


    // we  give time in token only in s , h  or d not in min
       let token = await  jwt.sign({id: userData._id},process.env.JWT_SECRET,
        {expiresIn : "30d"});
       
                res.status(201).send({
            success:true,
            message:"user registered succesfully",
            user :userData,
            token,
        });
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Internal server error...Something went wrong",
            
        });
        
    }
};
/*For login User */
export const loginUser =async(req,res) => {
    let {email,password}=req.body;
    try {
       let user = await User.findOne({email:email})
       if(!user)
        return res.status(400).send({
           success:false,
           message:"You are not registered please sign-up first "
    }); 
    /*validdity checkup */
  let isMatch=  await bcrypt.compare(password,user.password)
  if (!isMatch) return res.status(400).send({
    sucess:false,
    message:"Invalid password , please try again"
  })
  // assign a token to user
  let token = await jwt.sign({id: user._id},process.env.JWT_SECRET,{
    expiresIn:"1d",
  });
  res.status(200).send({
    success:true,
    message:"logged-in successfully",
    user:user,
    token,
  });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success:false,
            message:"Internal server error - something went wrong"
        })
        
    }
}
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("name email role status");
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




