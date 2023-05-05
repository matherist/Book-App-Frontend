import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Items from '../components/Items';
import Header from '../components/Header';
import axios from 'axios';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const ProductsPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data;
    axios
      .get('http://127.0.0.1:8000')
      .then((res) => {
        data = res.data;
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <Items items={items} />
    </div>
  );
};

export default ProductsPage;
