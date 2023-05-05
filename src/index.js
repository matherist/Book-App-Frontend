import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <About/>
        <Items items={this.state.items} />
        <Contact/>
        <Footer /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
