import React, { useState, useEffect }from 'react';
import { useForm,Controller  } from 'react-hook-form';
import Fab from '@mui/material/Fab';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { jobModel } from '../interfaces';


const AddJobToTable: React.FC = () => {
  const { register, handleSubmit, reset , formState: { errors } } = useForm<jobModel>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const [showAddJob, setShowAddJob] = useState(false);

  const handleAddJobClick = () => {
    setShowAddJob(true);
  };

  const onSubmit = async (data: jobModel) => {
    try {
      const response = await fetch('http://localhost:3000/jobs/createJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // התקבלה תשובה מוצלחת מהשרת
        console.log('נשלח בהצלחה!');
      } else {
        // שגיאה בתשובה מהשרת
        console.error('שגיאה בשליחת הטופס');
      }
    } catch (error) {
      // שגיאה בביצוע הבקשה
      console.error('שגיאה בביצוע הבקשה:', error);
    }
    handleClose();
  };
  

//   const onSubmit = (data: jobModel) => {
//     console.log(data);

//     handleClose();
//   };

  return (<>
    <div  style={{width:50,textAlign:'left',marginLeft:90,marginBottom:25, marginTop:25}}>
<Fab  onClick={handleAddJobClick} aria-label="add" >
        <AddIcon onClick={handleClickOpen} />
      </Fab></div>
      {showAddJob && <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign:'center'}}>Add new job</DialogTitle>
        <DialogContent>
  <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField label="Job" {...register('title', { required: 'Job title is required' })} error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField label="Job description" multiline rows={4} {...register('description', { required: 'Job description is required' })}error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField label="Job requirements" multiline rows={4} {...register('Requirements', { required: 'Job requirements is required' })} error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField label="Location" {...register('location', { required: 'Job location is required' })}error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField  label="Salary" {...register('salary', { required: 'Job salary is required' })}error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <DialogActions style={{ justifyContent:'space-between'}}>
      <Button onClick={handleClose}>cancel</Button>
      <Button  type="submit">save</Button>
    </DialogActions>
  </form>
</DialogContent>
      </Dialog>
    </div>}
    </>
  );
};

export default AddJobToTable;
