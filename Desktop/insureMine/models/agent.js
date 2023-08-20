import mongoose from "mongoose";

const agentSchema = ({
        
     agent_name: {
        type:String,
        unique:true
     },
     userType: {
        type:String,
       
     },
   
    });  

    const Agent = mongoose.model("Agent", agentSchema);

    export default Agent;

