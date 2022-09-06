import React from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import data from './data'

export default function App() {
  
  const cards = data.map (item => {
    return (
      <Body
        key={item.id}
        {...item}
      />
    )

  })
  return (
    <div className="App">
     
      <Header />
      {cards}
      
    
    </div>
  )
}


