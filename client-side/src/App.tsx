import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobsTable from './features/jobs/jobsTable';
import Navbar from './features/navBar';
import AboutPage from './features/about/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatesTable from './features/candidate/candidateTable';

function App() {
  const imagePath = process.env.PUBLIC_URL + '/logo.png';
  return (
    <BrowserRouter>
    <div className="App">
      {/* <img src='file:///C:/Users/User/Documents/%D7%9C%D7%99%D7%9E%D7%95%D7%93%D7%99%D7%9D/%D7%91%D7%95%D7%98%D7%A7%D7%9E%D7%A4/my-react-app/public/logo.png'/> */}
   {/* <img style={{height:130}} src= {imagePath} alt='logo'/> */}
   <Navbar/>
      <Routes>
         <Route path="/" element={<JobsTable/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/candidates/:id" element={<CandidatesTable />} />

         </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
