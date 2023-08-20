import express from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';

import User from '../models/user.js';
import * as savetoDb from './dataInsertionHelper.js'
import Policy from '../models/policy.js';
import Lob from '../models/lob.js';
import Account from '../models/account.js';

export const  uploadFileController = async(req,res)=>{
    console.log("control cobra");
    console.log(req.file);
    const filePath = req?.file?.path;
    let results =[];
    try {
      // Parse CSV data and save to MongoDB collections
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', async (row) => {

         const userId= await savetoDb.saveUserData(row);
         const carrierId= await savetoDb.saveCarrierData(row);
         const policyId= await savetoDb.savePolicyData(row);
         const lobId= await savetoDb.saveLobData(row);
         const agentId= await savetoDb.saveAgentData(row);
         const accountId=await  savetoDb.saveAccountData(row);
        
         await User.findByIdAndUpdate(userId, { $set: { policy_id: policyId,account_id:accountId,agent_id:agentId } });
         await Policy.findByIdAndUpdate(policyId, { $set: { lob_id: lobId,carrier_id:carrierId } });
        
       
        })
        .on('end', () => {
            console.log(results);
          // Delete the uploaded file after parsing
          fs.unlinkSync(filePath);
          res.status(200).json({ message: 'File uploaded and data saved successfully' });
        });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'An error occurred while processing the file' });
    }
 
     
  setTimeout(()=>{
    console.log({results});
  },15000);


}