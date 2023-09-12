import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  description: string;
  location: string;
  salary: string;
  Requirements: String;

}

const JobSchema: Schema =  new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  Requirements: { type: String, required: true },
  salary: { type: String, required: false },

});
const job= mongoose.model<IJob>('Job', JobSchema);

export default job;