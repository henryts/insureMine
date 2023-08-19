import mongoose from "mongoose";

const policySchema = mongoose.Schema({
  
     policyMode:{
        type:String,
        default:""  
     },
     policy_number:{
        type:String,
        default:""
     },

     policy_amount_written:{
        type:Number,
        default:""
     },
     premium_amount:{
        type:Number,
        default:""
     },
     policy_type:{
        type:String,
        default:""
     },
     policy_start_date:{
        type:Date,
        default:""
     },
     policy_end_date:{
        type:Date,
        default:""
     },
    
     lob_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lob",
    },
    carrier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "carrier",
    },
})

const Policy = mongoose.model("Policy", policySchema);

export default Policy;