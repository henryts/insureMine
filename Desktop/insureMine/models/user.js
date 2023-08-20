import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        lowercase: true,
        trim: true,
    },
    city: {
        type: String,
         trim: true,
    },
    state:{
        type: String,
        trim: true,
    },
    phone:{
        type: String,
        trim: true,
    },
    address: {
        type: String,
         trim: true,
    },
    zip: {
        type: String,
        trim: true,
    },
    dob: {
        type: String,

    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
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
        default:"",
      //  unique: true,
        trim: true,
    }
   
});

const User = mongoose.model("User", userSchema);

export default User;
