import React from 'react'
import { Navbar } from 'react-bootstrap';
import AppHeader from './AppHeader'

import {render} from 'react-dom'
import {hot} from 'react-hot-loader'

import InvoiceForm from './InvoiceForm'
import Customers from './Customers'
import Products from './Products'

import './App.css'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page: 1
    }
  }
  changePage(page){
    this.setState({
      page
    })
  }
  render(){
    var choice = this.state.page=='customers'?<Customers/>:<Products/>
    return (

      <div>
        <AppHeader changePage = {this.changePage.bind(this)}/>
        {choice}
      </div>
    )
  }
}

render(<App/>, document.getElementById('app-root'))