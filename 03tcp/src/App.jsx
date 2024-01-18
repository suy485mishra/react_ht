import { useState } from 'react'
import Page from './components/page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-200 p-3 rounded-md'>Suyash</h1>
      <Page username='Suyash'/>
      <Page/>
      <Page/>
    </>
  )
}

export default App
