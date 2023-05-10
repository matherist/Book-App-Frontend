import React, { Component } from 'react'// Make sure to replace with your actual image path

export class About extends Component {
  render() {
    return (
      <section id="About" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , textAlign: 'center'}}>
        <div className="about-page-content" style={{ textAlign: 'center' , width: '70%' }}>
          <h1 className="about-page-title">About Our Website Book-App</h1>
          <img src='https://www.anglicannews.org/media/1345762/black_web_booksonline.jpg' alt="Book Store" style={{ width: '40%', height: '200px' }} />
          <p className="about-page-description" style={{ textAlign: 'center', border: '2px dashed orange'}}>
            We offer a wide range of services and products. Our book store is filled with an extensive collection of books across various genres. n, non-fiction, mystery, romance, fantasy s.o. .Explore our site to learn more about us!
          </p>
        </div>
      </section>
    )
  }
}

export default About
