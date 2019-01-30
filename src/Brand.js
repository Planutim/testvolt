import React from 'react'
import { Navbar } from 'react-bootstrap'

const Brand = ()=>
  <div>
    <Navbar bg="light">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Navbar>
    <br/>
    <Navbar bg='dark'>
      <Navbar.Brand href='#home'>
        <img
          src='/logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt="react BootStrap logo" 
        />
      </Navbar.Brand>
    </Navbar>
  </div>

export default Brand