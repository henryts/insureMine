import mongoose from "mongoose";

const accountSchema = ({
        
     account_name: {
        type:String,
        trim:true,
     },
     account_type:{
        type:String,
        trim:true,  
     } 
    });
    

    const Account = mongoose.model("Account", accountSchema);

    export default Account;
