import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'

function App() {

  const names = ["Antonino", "Giovanni", "Mattia"]

  return (
    <>
      <Navbar />

      <Header />

      <List items={names} />
    </>
  )
}

export default App
