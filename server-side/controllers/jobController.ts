
import jobModel from "../models/jobModel";
import { Request, Response } from "express";
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Job title is required'),
  description: yup.string().required('Job description is required'),
  location: yup.string().required('Location is required'),
  Requirements: yup.string().required('Job requirements are required'),
  salary: yup
    .number()
    .required('Salary is required')
    .min(1000, 'Salary must be higher than 1000'),
});

// הצגת משרות
exports.getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobModel.find();
    res.json(jobs);
  }
  catch (error) {
    res.status(500).json({ error: 'failed connect to server' });
  }
};


//יצירת משרה חדשה
exports.createJob = async (req: Request, res: Response) => {
  try {
    const { title, description, location, Requirements, salary } = req.body;
    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      return res.status(400).json({ error: error.errors });
    }
    const job = await jobModel.create(new jobModel({ title, description, location, Requirements, salary }));
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to server', error });
  }
};

//עדכון משרה 
exports.updateJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, location, salary } = req.body;
    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      return res.status(400).json({ error: error.errors });
    }
    const job = await jobModel.findByIdAndUpdate(id, { title, description, salary }, { new: true });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to server' });
  }
};

// הצגת משרה בודדת לפי ID
exports.getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findById(id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve job' });
  }
}