import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard'
import './App.css'

function App() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <BrowserRouter>
        <h1>Name</h1>
        <form className="login">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <Link className="playbtn" to="/dashboard">Play</Link>
        </form>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <img className={click ? "music-toggle music-toggle-active" : "music-toggle music-toggle-inactive"} onClick={handleClick} src={click ? "https://i.imgur.com/LMvfMMV.png" : "https://i.imgur.com/DDPHQIo.png"}></img>
    </div>
  )
}

export default App;
