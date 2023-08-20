import express from 'express';
const router = express.Router();
import  * as userController  from '../controller/userController.js';



router.post('/createUser',userController.createUser);
router.post('/createUser',userController.getUserById);
router.post('/createUser',userController.updateUser);
router.post('/createUser',userController.deleteUser);


export default router;