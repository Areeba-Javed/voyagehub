import mongoose from "mongoose";


 const userModel =   mongoose.Schema({

    name:{
        type:String,
        required:false,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        trim:true,
        
    },
    photo:{
        type:String,

    },
    role:{
        type:String,
        anum:["admin","staff","user"],
        default:"user"
    }



},
//builtin function 
{timestamp:true,


}
)
//"users" is collection name of data base
const User =mongoose.model("users",userModel)
export default User;