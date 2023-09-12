import mongoose, { Schema, Document } from 'mongoose';

export interface ICandidate extends Document {
  name: string;
  jobID:string;
  specialization: string;
  experience: string;
  rating: Number;
  task: Boolean;
  interviews: Boolean;

}

const CandidateSchema: Schema =  new mongoose.Schema({
  name: { type: String, required: true },
  jobID: {type: String, required: true},
  specialization: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: Number, required: true },
  task: { type: Boolean, required: false },
  interviews: { type: Boolean, required: false },
});
const candidate= mongoose.model<ICandidate>('candidate', CandidateSchema);

export default candidate;