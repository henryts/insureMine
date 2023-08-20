import express from 'express';
const router = express.Router();
import  * as policyController  from '../controller/policyController.js';



router.post('/createPolicy',policyController.createPolicy);
router.get('/getPolicyDetails/:id',policyController.getPolicyById);
router.put('/updatePolicy/:id',policyController.updatePolicy);
router.delete('/delete/:id',policyController.deletePolicy);

export default router;