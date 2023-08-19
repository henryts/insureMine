import mongoose from "mongoose";

const lobSchema = mongoose.Schema({
  
    catagory_name:{
        type:String,
        default:""  
     },
     carrier_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "carrier",
        
     }

    });
  
    const Lob = mongoose.model("Lob", lobSchema);

    export default Lob;