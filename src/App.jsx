import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './views/Homepage'
import Layout from './components/Layout'
import DetailView from './views/DetailView'
import Counter from './views/Counter'
import Form from './views/Form'
import LoadingData from './views/LoadingData'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />} >
            
            <Route index element={<Homepage />} />
            <Route path={"/counter"} element={<Counter/>} />
            <Route path={"/form"} element={<Form />} />
            <Route path={"/posts"} element={<LoadingData/>} />
            <Route path={"/post/:id"} element={<DetailView/>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
