import { useState } from 'react'
import './App.css'
import RoomCard from './components/RoomCard'

function App() {
  const [text, setText] = useState('The entrance pipe leads north...')

  return (
    <div className="App">
      <RoomCard />
    </div>
  )
}

export default App
