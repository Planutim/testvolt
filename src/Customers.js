import React from 'react'
import { Button, Container, Row, Col, ListGroup, Table } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink';

class Customers extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      isLoaded: false,
      customerList: []
    }
  }
  componentDidMount(){
    fetch("/api/customers")
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoaded: true,
        customerList: result
      })
    })
  }
  increaseCounter(){
    this.setState({
      counter: this.state.counter+1
    })
  }
  render(){
    return (
      <Container className='Customers'>
        <Row>
          <Col>
            <h1>Customer list</h1>
          </Col>
          <Col>
            <Button>Create</Button>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.isLoaded?
              this.state.customerList.map(customer=>(
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
                </tr>
              )):null
            }
          </tbody>
        </Table>;
      </Container>
    )
  }
}

export default Customers