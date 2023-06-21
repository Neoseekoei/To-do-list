import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Registration from "./Components/Registration"
import Search from './Components/Search';
//import './Search.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="registration" element={ <Registration/> } />
      </Routes>
      <Search/>
    </div>
  )
}

export default App
