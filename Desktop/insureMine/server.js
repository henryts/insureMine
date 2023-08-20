import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/uploadRoute.js";
import userRoutes from "./routes/userRoutes.js";
import policyRoutes from './routes/policyRoutes.js';
import accountRoutes from './routes/policyRoutes.js'
import { startServer } from "./util/startServer.js";


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
app.use("/policy", policyRoutes);
app.use("/account", accountRoutes);
startServer();
