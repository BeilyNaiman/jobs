import React, { useState, useEffect }from 'react';
import { useForm,Controller  } from 'react-hook-form';
import Fab from '@mui/material/Fab';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { jobModel } from '../interfaces';
import ModeIcon from '@mui/icons-material/Mode';
import IconButton from '@mui/material/IconButton';

export const UpdateJobToTable: React.FC = () => {

const { register, handleSubmit, reset , formState: { errors } } = useForm<jobModel>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

const [showUpdateJob, setShowUpdateJob] = useState(false);

  const handleUpdateJobClick = () => {
    setShowUpdateJob(true);
  };

return(<>
<IconButton>
<ModeIcon  onClick={()=>{handleUpdateJobClick()}}> 
<AddIcon onClick={handleClickOpen} />
</ModeIcon></IconButton>

{showUpdateJob && <div>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle style={{textAlign:'center'}}>Add new job</DialogTitle>
    <DialogContent>
<form  style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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


{/* <Fab  onClick={handleUpdateJobClick} aria-label="edit" >
        <AddIcon onClick={handleClickOpen} />
      </Fab> */}

{/* {showUpdateJob && <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign:'center'}}>Add new job</DialogTitle>
        <DialogContent>
  <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
    <div style={{ margin: '0 auto', maxWidth: '300px' }}>
      <TextField label="Job"  {...register('title', { required: 'Job title is required' })} error={!!errors.title} helperText={errors.title?.message} />
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
      <TextField defaultValue={} label="Salary" {...register('salary', { required: 'Job salary is required' })}error={!!errors.title} helperText={errors.title?.message} />
    </div>
    <DialogActions style={{ justifyContent:'space-between'}}>
      <Button onClick={handleClose}>cancel</Button>
      <Button  type="submit">save</Button>
    </DialogActions>
  </form>
</DialogContent>
      </Dialog>
    </div>
} */}
</>)}