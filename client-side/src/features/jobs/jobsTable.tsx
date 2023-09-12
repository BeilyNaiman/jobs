//טבלה שמציגה את כל המשרות
//לחיצה על רשומה בטבלה מובילה לדף המועמדים למשרה
//כפתור להוספת משרה חדשה לטבלה
//
import React, { useState, useEffect } from 'react';
import { jobModel } from '../interfaces';
import axios from 'axios';
import { log } from 'console';
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, GridRowParams } from '@mui/x-data-grid';
import onSubmit from "./addJobToTable"
import AddJobToTable from './addJobToTable';
import CandidatesTable from '../candidate/candidateTable';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { UpdateJobToTable } from './updateJob'

const JobsTable: React.FC = () => {
  let navigate = useNavigate();

  const handleEdit = (params: any) => {
    // הפעלת הפונקציה על כל שורה בטבלה
    navigate('/candidates/');
  };

  const [data, setData] = useState<jobModel[]>([]);
   






  
  const handleRowClick = (params: any,event:GridRowParams) => {
    const id: string = params.id;
    console.log(params);
    console.log(event);

    const fieldValue = event.row?.edit; // שים לב ששם התחום תלוי בשם שהגדרת בשדה 'field' של העמודה
  console.log(event.row?.field);
    if (fieldValue === true) {
    console.log("edittttt");
  }
    // const columnName: string = params.columns[0].field ;
    // console.log(columnName);
    if(event.row?.field!='edit')
        navigate('/candidates/' + id);
    else{
      <UpdateJobToTable/>
    }
  };

  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'edit', headerName: 'Edit', width: 50, renderCell: (params: GridCellParams) => (<UpdateJobToTable />), },
    { field: 'title', headerName: 'Job', width: 170 },
    { field: 'description', headerName: 'Job description', width: 420 },
    { field: 'location', headerName: 'Job location', width: 180 },
    { field: 'Requirements', headerName: 'Job requirements', width: 380 },
    { field: 'salary', headerName: 'Salary', width: 180 }
  ];
  let flag: boolean = false;

  
  




  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('http://localhost:3000/jobs/getAll');
        const bb = await response.json();
        const fData: jobModel[] = bb.map((item: any) => ({
          id: item._id,
          title: item.title,
          description: item.description,
          location: item.location,
          salary: item.salary,
          Requirements: item.Requirements,
        }));
        setData(fData);
        console.log(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchAll();
  }, [onSubmit]);
  return (
    <>
      <AddJobToTable />
      <div style={{ width: '100%' }}>
        <DataGrid style={{ width: 1400, marginLeft: 65 }} rows={rows} columns={columns} onRowClick={(params,event:any) => handleRowClick(params,event)} />
      </div>
    </>
  )
}
export default JobsTable;
//onClick={()=>navPage("/")}





