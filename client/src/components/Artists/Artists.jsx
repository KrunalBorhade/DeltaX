import React, { useEffect, useState } from 'react'
import "./artists.css"

export const Artists = () => {
  const [data,setData] = useState([])

  const getData= async() => {
    try {
      const fetchData = await fetch("http://localhost:5000/artists")
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
    <>
    <h2 className='header-artist'>Top 10 Artists</h2>
        <table className='table'>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Date of Birth</th>
          <th>Songs</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(artist => (
            <tr key={artist._id}>
                <td>{artist.Name}</td>
                <td>{artist.DOB}</td>
                <td>{artist.song}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </>
  )
}
