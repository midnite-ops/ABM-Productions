import './App.css'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Layout from './layout'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/Coaching' element={<Coaching />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
