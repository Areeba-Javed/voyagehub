import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

export const verifyToken = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer"))
      return res.status(401).json({
    message :"No token provided"
    })
    //agar authheader ma token nhi ha to nikalana ka method

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //jo  variable login karta hoya use  kia  wo hi req ka aga likha jaye ga 
         //.select("-password") ka password admin ko na aya
        req.user = await User.findById(decoded.id).select("-password");
        // extra code 
    //      if (!req.user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    next();
    
    } catch (error) {
        res.status(401).json({
            message:"invalid token"
        });
    }
};

export const checkRole = (roles)=>{
    return(req,res,next)=>{
    if( !roles.includes(req.user.role)){
        return res.status(403).json({
            message:"Access denied"
        })
    }
    next();
}
};
export const  dummyController = (req,res)=>{
    res.send("Bank internal system")
}