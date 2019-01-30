import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'

class AppHeader extends React.Component{
  constructor(props){
    super(props)
  }
  test(page){
    this.props.changePage(page)
  }
  render(){
    return (
    <Navbar bg='light' variant='light'>

      <Navbar.Brand href='#home'>Invoice App</Navbar.Brand>
      <Nav>
        <Nav.Link href=''>Invoices</Nav.Link>
        <Nav.Link href='#products' onClick={this.test.bind(this, 'products')}>Products</Nav.Link>
        <Nav.Link href='#customers' onClick={this.test.bind(this,'customers')}>Customers</Nav.Link>
      </Nav>
  
    </Navbar>
    )
  }
}
export default AppHeader