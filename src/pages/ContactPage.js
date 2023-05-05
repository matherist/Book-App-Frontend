import React, { Component } from 'react'
import Navbar  from '../components/Navbar'
import Contact from '../components/Contact'
import Header from '../components/Header'
export class ContactPage extends Component {
  render() {
    return (
      <div>
            <Header/>
            <Navbar/>
            <Contact/>
      </div>
    )
  }
}

export default ContactPage