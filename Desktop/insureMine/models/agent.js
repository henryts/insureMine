import mongoose from "mongoose";

const agentSchema = ({
        
     agent_name: {
        type:String,
        default:""
     },
     userType: {
        type:String,
        default:""
     },
   
    });  

    const Agent = mongoose.model("Agent", agentSchema);

    export default Agent;

