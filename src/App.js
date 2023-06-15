import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Registration from "./Components/Registration"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="registration" element={ <Registration/> } />
      </Routes>
    </div>
  )
}

export default App
