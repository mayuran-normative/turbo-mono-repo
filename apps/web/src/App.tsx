import { useState } from 'react'

import './App.css'
import { Button } from '@sme/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button title="Hello from your button!" />

    </>
  )
}

export default App
