import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './views/Homepage'
import Layout from './components/Layout'
import DetailView from './views/DetailView'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />} >
            
            <Route index element={<Homepage />} />
            <Route path={"/counter"} element={<Main.Counter/>} />
            <Route path={"/form"} element={<Main.Form />} />
            <Route path={"/posts"} element={<Main.LoadingData/>} />
            <Route path={"/post/:id"} element={<DetailView/>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
