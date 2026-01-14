import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('The entrance pipe leads north...')

  return (
    <div className="App">
      <h1>1. Slimy Crossroads(D,T)</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={50}
      />
    </div>
  )
}

export default App
