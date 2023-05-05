import React, { Component } from 'react'
import Navbar  from '../components/Navbar'
import Items from '../components/Items'
import Header from '../components/Header'
import axios from 'axios';

export class ProductsPage extends Component {
    state = {
        items: [],
      }
      componentDidMount(){
        let data;
        axios.get('http://127.0.0.1:8000')
        .then(res => {
          data = res.data;
          this.setState({
            items: data
          });
        })
        .catch(err => {
          console.log(err);
        })
      }
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <Items items={this.state.items}/>
      </div>
    )
  }
}
        {/* <About/>
        <Items items={this.state.items} />
        <Contact/>
        <Footer /> */}

export default ProductsPage