import express from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';

import User from '../models/user.js';
import * as savetoDb from './dataInsertionHelper.js'

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

          savetoDb.saveUserData(row);
          savetoDb.saveCarrierData(row);
          savetoDb.savePolicyData(row);
          savetoDb.saveLobData(row);
          savetoDb.saveAgentData(row);
          savetoDb.saveAccountData(row);
           
       
        })
        .on('end', () => {
           // console.log(results);
          // Delete the uploaded file after parsing
        //   fs.unlinkSync(filePath);
        //   res.status(200).json({ message: 'File uploaded and data saved successfully' });
        });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'An error occurred while processing the file' });
    }
 
     



}