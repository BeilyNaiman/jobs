import candidateModel from '../models/candidateModel';
import { Request, Response } from "express";


 // הצגת מועמדים
 exports.getAllCandidates= async (req: Request, res: Response) => {  
    try {
      const candidates = await candidateModel.find();
      res.json(candidates);
    } 
    catch (error) {
       console.log("hi' it me");
      res.status(500).json({ error: 'Failed to retrieve candidates' });
    }
  };


  exports.getAllSuitableCandidates= async (req: Request, res: Response) => {  
    console.log("before");
      try {
        console.log("tryyyyyyyyyyy");
      const {id} = req.params;
      console.log(id + "jid");
        const candidates = await candidateModel.find({jobID:id});
      //  console.log(candidates[0].name);
      console.log(candidates.length);
        res.json(candidates);
      } 
      catch (error) {
        console.log("catchhhhhhhhhh");

         console.log("hi' it me");
        res.status(500).json({ error: 'Failed to retrieve candidates' });
      }
    };

//יצירת מועמד חדש
 exports.createCandidates= async (req: Request, res: Response) => {
    try {
      console.log("tryyyyyyyy");
      
        const { name,jobID, specialization, experience,rating, task,interviews } = req.body;
        const candidate= await candidateModel.create(new candidateModel({name,jobID, specialization, experience,rating, task,interviews}));
      
        res.status(201).json(candidate);
      }
      catch (error) {
      console.log("catchhhhhhhhhh");
      

        res.status(500).json({ message: 'Failed to create candidate', error });
      }
  };

//עדכון מועמד 
  exports.updateCandidate = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name,jobID, specialization, experience,rating, task,interviews } = req.body;
      const candidate = await candidateModel.findByIdAndUpdate(id, {name,jobID,specialization,experience,rating,task,interviews } , { new: true });
      if (!candidate) {
        return res.status(404).json({ error: 'Candidate not found' });
      }
      res.json(candidate);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update candidate' });
    }
  };
  
  // הצגת מועמד בודד לפי ID
exports.getById= async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const candidate = await candidateModel.findById(id);
      if (!candidate) {
        return res.status(404).json({ error: 'candidate not found' });
      }
      res.json(candidate);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve candidate' });
    }}