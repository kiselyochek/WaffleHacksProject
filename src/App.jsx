import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import Journal from "./Journal";
import Breathing from "./Breathing";
import Planner from "./Planner";
import Tracker from "./Tracker";
import Reminder from "./Reminder";
import Community from "./Community";
import Register from "./Register";
import bgm from "./assets/bgm.mp3";
import Sound from 'react-sound';
import './App.css';

function App() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/breathe" element={<Breathing />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Sound
          url={bgm}
          playStatus={click ? Sound.status.PLAYING : Sound.status.PAUSED}
          loop={true}
        />
        <img 
          className={click ? "music-toggle music-toggle-active" : "music-toggle music-toggle-inactive"} 
          onClick={handleClick} 
          src={click ? "https://i.imgur.com/LMvfMMV.png" : "https://i.imgur.com/DDPHQIo.png"} 
          alt="Music Toggle"
        />
        </BrowserRouter>
      </div>
  );
}

export default App;