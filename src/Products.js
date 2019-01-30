import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


class Products extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    fetch('/api/products')
    .then(res=>res.json())
    .then((result)=>{
      this.setState({
        isLoaded: true,
        productList: result
      })
    })
  }
  render(){
    return (
      <Container>
        <Row>
          <Col>
          <h2>Product List</h2>
          </Col>
          <Col>
          <Button variant='outline-dark'>Create</Button>
          </Col>
        </Row>
        <Table>

        </Table>
      </Container>
    )
  }
}

export default Products