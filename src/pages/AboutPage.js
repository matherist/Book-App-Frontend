import React, { Component } from 'react'
import Navbar  from '../components/Navbar'
import About from '../components/About'
import Header from '../components/Header'

export class AboutPage extends Component {
  render() {
    return (
      <div>
            <Header/>
            <Navbar></Navbar>
            <About></About>
      </div>
    )
  }
}

export default AboutPage