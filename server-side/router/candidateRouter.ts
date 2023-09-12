import  Express, {Router, request, response}  from "express";
//import Express, { Request, Response, Router } from 'express';

import candidate from "../models/candidateModel";
const candidateF=require('../controllers/candidateController');
const candidateRouter :Router=Express.Router();




candidateRouter.get('/getAll',candidateF.getAllCandidates);
candidateRouter.get('/getAllSuitableCandidates/:id',candidateF.getAllSuitableCandidates);
candidateRouter.get('/getByID/:id',candidateF.getById);
candidateRouter.post('/createCandidates',candidateF.createCandidates);
candidateRouter.put('/updateOne/:id',candidateF.updateCandidate)

export = candidateRouter;