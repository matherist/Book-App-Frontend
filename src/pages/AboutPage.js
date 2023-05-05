import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Header from '../components/Header';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const AboutPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <About />
    </div>
  );
};

export default AboutPage;
