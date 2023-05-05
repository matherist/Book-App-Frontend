import React, { Component } from 'react'
import Navbar  from '../components/Navbar'
import Contact from '../components/Contact'
import Header from '../components/Header'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const ContactPage = () => {
    const { isLoggedIn } = useContext(AuthContext);
  
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return (
      <div>
        <Header/>
        <Navbar/>
        <Contact/>
      </div>
    );
  };

export default ContactPage




