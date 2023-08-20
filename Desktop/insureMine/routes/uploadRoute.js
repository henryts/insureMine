import express from 'express';
const router = express.Router();
import multer from 'multer';
import { upload } from '../config/multer.js';
 
import { uploadFileController } from '../controller/uploadFileController.js';


router.post('/upload', upload, uploadFileController);


export default router;