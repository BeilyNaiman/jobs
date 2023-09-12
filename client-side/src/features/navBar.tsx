import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
    const imagePath = process.env.PUBLIC_URL + '/logo.png';
    let navigate=useNavigate();
    const navPage=(path:string)=>{
        navigate(path);
    }


  return (
    <AppBar style={{backgroundColor:'white',color:'black'}} position="static">
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography> */}
        <img style={{height:130,textAlign:'center'}} src= {imagePath} alt='logo'/>
       
        <Button onClick={()=>navPage("/")} color="inherit">My Jobs</Button>
        <Button onClick={()=>navPage("/home")} color="inherit" >Home</Button>
        <Button onClick={()=>navPage("/about")} color="inherit">About</Button>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
