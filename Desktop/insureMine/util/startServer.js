import express from 'express';
import mongoose from 'mongoose';
import connection from '../config/mongoose.js';
const app = express();
const port = process.env.PORT || 5000;
export const startServer = async () => {
    try {
      await connection; // Wait for the database connection to be established
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };