import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h4>Bistro Boss</h4>
     <button className="btn btn-info">Info</button>
  
    </>
  )
}

export default App
