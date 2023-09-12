import React, { useState, useEffect }from 'react';
import { candidateModel} from '../interfaces';
import axios from 'axios';
import { log } from 'console';
import { DataGrid, GridRowsProp, GridColDef , GridCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Checkbox } from '@mui/material';

const CandidatesTable: React.FC=(params:any)=>{
  const { id } = useParams();
  console.log(id+"hhhh");
  const [data, setData] = useState<candidateModel[]>([]);
  const [value, setValue] = useState<number | null>(params.value as number);
  const RatingCell = (params: GridCellParams) => {
    const handleChange = async (event: React.ChangeEvent<{}>, newValue: number | null) => {
      const updatedData = data.map((item:candidateModel) => {
        if (item.id === params.row.id) {
          return {
            ...item,
            rating: newValue as Number
          };
        }
        return item;
      });
      setData(updatedData);

      try {
        await axios.put(`http://localhost:3000/candidates/updateCandidate/${params.row.id}`, {
          rating: newValue as Number
        });
      } catch (error) {
        console.error(error);
      }
      // כאן ניתן לבצע שינוי בדירוג בעזרת שליחת נתונים לשרת או עדכון הצגת הדירוג בממשק המשתמש
    };
    return <Rating value={params.value as number} onChange={handleChange} />
  };
const checkBoxCell=(params: GridCellParams<any, any>)=>{
  return <Checkbox checked={params.value as boolean||false} />
}
     const rows: GridRowsProp = data;
      const columns: GridColDef[] = [
        { field: 'name' ,headerName: 'Candidate name', width: 170 },
        { field: 'specialization', headerName: 'Candidate specialization', width: 200 },
        { field: 'experience', headerName: 'Candidate experience', width: 180 },
        { field: 'rating', headerName: 'Candidate rating', width: 200 ,renderCell: RatingCell},
        {
          field: 'task',
          headerName: 'Task',
          width: 150,
          renderCell:checkBoxCell
        },
        {
          field: 'interviews',
          headerName: 'Interviews',
          width: 150,
          renderCell:checkBoxCell
        }
      ];

    
      useEffect(() => {
        const fetchAll=async()=>{
            try{
            const response = await fetch('http://localhost:3000/candidates/getAllSuitableCandidates/'+id);
            const candidateList=await response.json();
            const fData: candidateModel[] =candidateList.map((item: any) => ({
                id:item._id,
                name: item.name,
                jobID: item.jobID,
                specialization: item.specialization,
                experience: item.experience,
                rating: item.rating,
                task: item.task,
                interviews:item.interviews
                      }));
                      setData(fData);
                      console.log(data);
        }
        catch(error){
            console.error(error);
        }
        }
        fetchAll();
      }, []);
    return(
        <>
        <div style={{ width: '100%' }}>
      <DataGrid  style={{width:1400 , marginLeft:65}} rows={rows} columns={columns} />
       </div>
        </>
    )
}
export default CandidatesTable;





  
