import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Songs } from './components/Songs/Songs';
import {Routes, Route, Link} from "react-router-dom";
import { AddSong } from './components/AddSong/AddSong';
import { Artists } from './components/Artists/Artists';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/addsong" element={<AddSong />} />
      </Routes>
    
    </div>
  );
}

export default App;
