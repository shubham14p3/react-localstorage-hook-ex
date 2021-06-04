import React from 'react'

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'
// name,url,price,quantity,available
const Form = ({
  name,
  url,
  amount,
  quantity,
  available,
  handleName,
  handleUrl,
  handleAmount,
  handleQuantity,
  handleAvailable,
  handleSubmitForm,
  handleClearExpenses
}) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Name of Product
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='name'
          id='expenseName'
          placeholder='Name of expense?'
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Image of Product (URL)
      </Label>
      <Col sm={4}>
        <Input
          type='url'
          name='url'
          id='expenseUrl'
          placeholder='Image of Product'
          value={url}
          onChange={handleUrl}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        $ Amount
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleQunatity' sm={2}>
        Quantity
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='quantity'
          id='expenseQuantity'
          placeholder='0.00'
          value={quantity}
          onChange={handleQuantity}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Available
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='available'
          id='expenseAvailable'
          placeholder='0.00'
          value={available}
          onChange={handleAvailable}
        />
      </Col>
    </FormGroup>
    <Button type='submit' color='primary'>
      Add
    </Button>{' '}
    <Button type='submit' color='danger' onClick={handleClearExpenses}>
      Delete
    </Button>
  </BTForm>
)

export default Form