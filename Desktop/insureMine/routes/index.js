import express from 'express';
const router = express.Router();
import multer from 'multer';
import { upload } from '../config/multer.js';
 
import { uploadFileController } from '../controller/uploadFileController.js';
// import userRoutes from './userRoutes';
// import accountRoutes from './accountRoutes';
// import policyRoutes from './policyRoutes';
// ... import other route files

router.post('/upload', upload, uploadFileController);
// router.use('/api', accountRoutes);
// router.use('/api', policyRoutes);

export default router;