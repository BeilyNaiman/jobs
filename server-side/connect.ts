const mongoose = require('mongoose');
import jobModel from './models/jobModel';
import candidateModel from './models/candidateModel';
const Schema = mongoose.Schema;
  
  // חיבור למסד הנתונים
  export const conn=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      
      console.log('Connected to MongoDB')})
      .catch((error:Error) => {
        console.error('Error connecting to MongoDB:', error);
      });
  }
      
 