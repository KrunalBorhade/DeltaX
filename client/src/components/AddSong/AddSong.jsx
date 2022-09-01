import React from 'react'
import "./AddSong.css"

export const AddSong = () => {
  return (
    <>
    Adding a new song
    <div className="add-song1">
     <label>
      Name
      <input type="text" placeholder='Add Song Name' />
      </label> 
      <label>
      Date <input type="date" placeholder='Add Date Released' />
      </label>
      <label>
      Artwork <input type="text" Placeholder="Add Image Url"/>
      </label>
      <label>
      Artists <input type="text" placeholder='Select A Artist' />
      </label>
      <button className='save-btn'>Save</button>
    </div>
    </>
  )
}
