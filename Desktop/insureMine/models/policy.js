import mongoose from "mongoose";

const policySchema = mongoose.Schema({
  
     policyMode:{
        type:String,
        trim: true,       
     },
     policy_number:{
        type:String,
        trim: true,
       
     },

     policy_amount_written:{
        type:Number,
        trim: true,
       
     },
     premium_amount:{
        type:Number,
        trim: true,
      
     },
     policy_type:{
        type:String,
        trim: true,
      
     },
     policy_start_date:{
        type:Date,
       
     },
     policy_end_date:{
        type:Date,
       
     },
     producer:{
        type: String,
        trim:true
        
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