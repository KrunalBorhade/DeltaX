import React, { useState } from 'react'
import "./songs.css"
import { useNavigate } from "react-router-dom"
import { AddSong } from '../AddSong/AddSong';
import {Routes, Route, Link} from "react-router-dom";
import { useEffect } from 'react';

export const Songs = () => {

  const navigate = useNavigate();

  const [data,setData] = useState([])

  const getData= async() => {
    try {
      const fetchData = await fetch("http://localhost:5000/songs")
      let res = await fetchData.json()
      console.log(res)
      setData(res)
    } catch (err) {
      console.log(err)
    } 
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div>
      <div className="songs-Header">
      <h3>Top 10 Songs</h3>
      <button className='add-song' onClick={()=> navigate("addsong")}>+ Add Song</button>
      </div>  
     <table className='table'>
      <thead>
        <tr >
          <th>Artwork</th>
          <th>Song</th>
          <th>Date of Release</th>
          <th>Artist</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(song => (
            <tr key={song._id}>
                <td><img src={song.CoverImg} /></td>
                <td>{song.Name}</td>
                <td>{song.Date_Of_Release}</td>
                <td>{song.artist}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
    
  )
}
