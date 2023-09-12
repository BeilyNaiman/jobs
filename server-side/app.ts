import express, { Request, Response, Router } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import jobModel from './models/jobModel';
import {conn} from './connect';
const jobFunctions=require('./router/jobRouter');
const candidateFunctions=require('./router/candidateRouter');
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.listen(3000,()=>{
    console.log("server is running")
})
app.use('/jobs',jobFunctions);
app.use('/candidates',candidateFunctions);
conn();





