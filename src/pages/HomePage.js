import React, { Component } from 'react'
import Home from '../components/Home'
import Header from '../components/Header'
import Navbar  from '../components/Navbar'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const HomePage = () => {
    const { isLoggedIn } = useContext(AuthContext);
  
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return (
      <div>
        <Header/>
        <Navbar></Navbar>
        <Home />
      </div>
    );
  };


  export default HomePage