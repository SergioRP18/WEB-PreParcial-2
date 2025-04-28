import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <div>
        <h1>Celestial Bodies</h1>
        <span>By DMI Students</span>
     </div>
     <div>
        <h1>Bodies</h1>
        <label htmlFor="options">
          <select name="options" id="options-bodies">
            <option value=""></option>
          </select>
        </label>
     </div>
    </>
  )
}

export default App
