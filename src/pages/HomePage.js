import React, { Component } from 'react'
import Home from '../components/Home'
import Header from '../components/Header'
import Navbar  from '../components/Navbar'
export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar></Navbar>
        <Home />
      </div>
    )
  }
}

export default HomePage