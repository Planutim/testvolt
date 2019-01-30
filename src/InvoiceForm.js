import React from 'react'
import { Form, Button } from 'react-bootstrap'

const InvoiceForm = () =>(
  <Form action='/test2'>
    <Form.Group controlId='formBasicEmail'>
      <Form.Label>Email address</Form.Label>
      <Form.Control type='email' placeholder='Enter email' />
      <Form.Text className='text-muted'>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId='formBasicPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control size='lg' type='password' placeholder='Password' />
    </Form.Group>
    <Form.Group controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Check me out' />
    </Form.Group>
    <Form.Group controlId='exampleForm.ControlSelect1'>
      <Form.Control as='select' multiple >
        <option>1</option>
        <option>12</option>
      </Form.Control>
    </Form.Group>
    <Button variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default InvoiceForm