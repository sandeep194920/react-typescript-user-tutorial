import React, { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(5)
  const changeNumber = () => {
    setNumber(0)
  }
  return (
    <div className='App'>
      <h1>React Typescript Users List</h1>
    </div>
  )
}

export default App
