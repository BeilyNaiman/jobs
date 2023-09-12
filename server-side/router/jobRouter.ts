import  Express, {Router, request, response}  from "express";
const jobsF=require('../controllers/jobController');
const jobRouter :Router=Express.Router();




jobRouter.get('/getAll',jobsF.getAllJobs);
jobRouter.get('/getByID/:id',jobsF.getById);
jobRouter.post('/createJob',jobsF.createJob);
jobRouter.put('/updateOne/:id',jobsF.updateJob)

export = jobRouter;