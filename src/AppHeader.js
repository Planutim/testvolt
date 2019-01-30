import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'

const AppHeader = ()=>(
  <Navbar bg='light' variant='light'>

    <Navbar.Brand href='#home'>Invoice App</Navbar.Brand>
    <Nav>
      <Nav.Link href='#invoices'>Invoices</Nav.Link>
      <Nav.Link href='#products'>Products</Nav.Link>
      <Nav.Link href='#customers'>Customers</Nav.Link>
    </Nav>

  </Navbar>
)

export default AppHeader