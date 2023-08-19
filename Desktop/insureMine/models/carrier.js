import mongoose from "mongoose";

const carrierSchema = mongoose.Schema({
  company_name: {
    type: String,
    default: "",
  },
  
  hasActiveClientPolicy:{
    type: String,
    default: "",  
  },
  csr: {
    type: String,
    default: "",
  },
  lob_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "lob",
  }
});
const Carrier = mongoose.model("Carrier", carrierSchema);

export default Carrier;
