import mongoose from "mongoose";

const accountSchema = ({
        
     account_name: {
        type:String,
        default:""
     },
     account_type:{
        type:String,
        default:""
     }

    });

    const Account = mongoose.model("Account", accountSchema);

    export default Account;
