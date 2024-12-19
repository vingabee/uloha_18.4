import React, { useState } from 'react'
import './App.css'

function App() {

  const texty = [
    "Ahoj, svet!",
    "Toto je druhý text.",
    "Zmeniť text na tento!",
    "Klikol si na tlačidlo!"
  ]

  const [index, setIndex] = useState(0)

  const zmenText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texty.length)
  }

  return (
    <div className="App">
      <h1>{texty[index]}</h1>
      <button onClick={zmenText}>Klikni na mňa</button>
    </div>
  )
}

export default App