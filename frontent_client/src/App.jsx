import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// All the components will be imported here
import Login from './components/account/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ marginTop: 64 }}>
        <Login/>
        
      </div>
     
    </>
  )
}

export default App
