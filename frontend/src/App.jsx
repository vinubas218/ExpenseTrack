import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import HomePage from './HomePage';
import Expense from './Expense';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/createaccount" element={ <CreateAccount/>} />
          <Route path="/homepage" element={ <HomePage/>} />
          <Route path="/expense" element={ <Expense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
