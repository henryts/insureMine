import express from 'express';
const router = express.Router();
import  * as userController  from '../controller/userController.js';



router.post('/createUser',userController.createUser);
router.get('/readUser/:id',userController.getUserById);
router.put('/createUser/:id',userController.updateUser);
router.delete('/createUser/:id',userController.deleteUser);


export default router;