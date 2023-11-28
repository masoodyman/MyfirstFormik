import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form_Formik from "./Commponants/Form_Formik.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form_Formik/>
    </div>
  )
}

export default App
