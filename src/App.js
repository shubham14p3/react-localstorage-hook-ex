import React, { useState, useEffect  } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import './App.css';
import Logo from './logo.svg'
import Form from './components/Form'
// import List from './components/List'
import ListCard from './components/ListCard'

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
const [amount, setAmount] = useState('')
const [quantity, setQuantity] = useState('')
const [available, setAvailable] = useState('')

const handleName = event => {
  console.log('Name ', event.target.value)
  setName(event.target.value)
}
const handleUrl = event => {
  console.log('Url ', event.target.value)
  setUrl(event.target.value)
}

const handleAmount = event => {
  console.log('Amount ', event.target.value)
  setAmount(event.target.value)
}

const handleQuantity = event => {
  console.log('Qunatity', event.target.value)
  setQuantity(event.target.value)
}

const handleAvailable = event => {
  console.log('Available ', event.target.value)
  setAvailable(event.target.value)
}

const handleSubmitForm = event => {
  event.preventDefault()
  // do something when submitting the form
  //check whether the name is not empty and the amount is not negative
  if (name !== '' && amount > 0) {
    // single expense object
    const expense = { name, url, amount, quantity, available }
    // do not override previous values in the array
    // use spread operator to access previous values
    setExpenses([...expenses, expense])

    // clean input fields
    setName('')
    setUrl('')
    setAmount('')
    setQuantity('')
    setAvailable('')
    

  } else {
    console.log('Invalid expense name or the amount')
  }
}

useEffect(() => {
  localStorage.setItem('expenses', JSON.stringify(expenses))
}, [expenses])

const handleClearExpenses = () => {
  setExpenses([])
}

  return (
    <Container>
     
        <Form
  name={name}
  url={url}
  amount={amount}
  quantity={quantity}
  available={available}
  handleName={handleName}
  handleUrl={handleUrl}
  handleAmount={handleAmount}
  handleQuantity={handleQuantity}
  handleAvailable={handleAvailable}
  handleSubmitForm={handleSubmitForm}
  handleClearExpenses={handleClearExpenses}
/>
     
        <ListCard expenses={expenses} />
      
    </Container>
    
  )
}
export default App