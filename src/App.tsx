import React, { useState } from 'react'
import './App.css'

interface IState {
  people: {
    name: string
    url: string
    age: number
    note: string
  }
}
function App() {
  const [people, setPeople] = useState<IState['people'][]>([])

  people.map((person) => {
    console.log(person)
  })

  return (
    <div className='App'>
      <h1>People invited to the party</h1>
    </div>
  )
}

export default App
