import React from 'react';

export interface jobModel {
    id:string;
    title: string;
    description: string;
    location: string;
    salary: String;
    Requirements: String;
}

export interface candidateModel {
    id:string;
    name: string;
    jobID: String;
    specialization: string;
    experience: string;
    rating: Number;
    task: Boolean;
    interviews: Boolean;
}


