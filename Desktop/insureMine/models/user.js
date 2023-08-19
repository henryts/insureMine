import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        default:"",
    },
    gender: {
        type: String,
        default:"",
    },
    city: {
        type: String,
        default:"",
    },
    address: {
        type: String,
        default:"",
    },
    zip: {
        type: String,
        default:"",
    },
    dob: {
        type: String,
        default:"",
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounts",
    },
    policy_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "policy",
    },
    agent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agent",
    },
    applicant_id: {
        type: String,
        default:""
    },
  
});

const User = mongoose.model("User", userSchema);

export default User;
