import React from 'react';
import { useState } from 'react';
import TexttoSpeech from '../Components/textSpeech';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" alt="Vite Logo" />
      </a>
      <h1> Text to Speech App</h1>
      <TexttoSpeech />
    </div>
  )
}

export default App
