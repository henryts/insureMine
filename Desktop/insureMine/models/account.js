import mongoose from "mongoose";

const accountSchema = ({
        
     account_name: {
        type:String,
        trim:true,
     },
     account_type:{
        type:String,
        trim:true,  
     } ,
     account_holder:{
      type:String,
      trim:true,  
   } ,
     dob:{
      type:Date,
      
   } , 
    address:{
      type:String,
      trim:true,  
   } ,
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  },

    });
    

    const Account = mongoose.model("Account", accountSchema);

    export default Account;
