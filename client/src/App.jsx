import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Songs } from './components/Songs/Songs';
import {Routes, Route, Link} from "react-router-dom";
import { AddSong } from './components/AddSong/AddSong';
import { Artists } from './components/Artists/Artists';

function App() {
  return (
    <div>
      <Navbar />
      <Songs />
      <Routes>
        <Route path="addsong" element={<AddSong />} />
      </Routes>
      <Artists />
    </div>
  );
}

export default App;
