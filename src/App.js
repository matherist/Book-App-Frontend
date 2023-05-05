
import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar';
class App extends React.Component{
  render(){
    return (
      <div className='container'>
        <Header></Header>
        <Navbar/>
        <Home/>

      </div>
    )
  }
}

export default App;
