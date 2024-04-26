import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from "./components/Nav"
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route
      path='/'
      element={<Home />} />
      <Route
      path='/pizzas:id'
      element={<Pizza />} />

      <Route
      path='/carrito'
      element={<Carrito />} />

      <Route
      path='*'
      element={<NotFound />} />


    </Routes>
    </>

  )
}

export default App
