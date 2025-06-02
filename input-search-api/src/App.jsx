import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputSearch from './components/InputSearch'
import EnhanceInputSearch from './components/EnhanceInputSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InputSearch /> */}
      <EnhanceInputSearch />
    </>
  )
}

export default App
