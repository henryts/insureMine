import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import { upload } from "./config/multer.js";
import connection from "./config/mongoose.js";
import userRoutes from "./routes/userRoutes.js"


const app = express();
app.use(express.json());

app.use(router);

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();


app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/user", userRoutes);
const port = process.env.PORT || 5000;
const startServer = async () => {
    try {
      await connection; // Wait for the database connection to be established
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };

  startServer();
// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });