import { config } from 'dotenv';
import mongoose from "mongoose";
config();
const local_url ='mongodb://localhost:27017/insuredMine'
const connection = mongoose
  .connect('mongodb://0.0.0.0:27017/insuredMine', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
export default connection;
