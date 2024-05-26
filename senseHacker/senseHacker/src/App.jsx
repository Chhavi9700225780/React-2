
import { Routes } from "react-router-dom";
import './App.css'
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Levels from "./pages/Levels"
import Play from "./pages/Play"


function App() {
  return(
  <div className="">
    
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/levels" element={<Levels/>} />
          <Route path="/game" element={<Play/>} />
          
        </Routes>
  </div>
  )
}

export default App
