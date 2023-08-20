import express from 'express';
const router = express.Router();
import  * as accountController  from '../controller/accountController.js';



router.post('/createAccount',accountController.createAccount);
router.get('/getAccountDetails/:id',accountController.getAccountById);
router.put('/updateAccount/:id',accountController.updateAccount);
router.delete('/deleteAcount/:id',accountController.deleteAccount);

export default router;