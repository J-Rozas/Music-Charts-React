import React from "react";
// import MusicDetails from "./MusicDetails";

const MusicList = ({songs}) => {
  
  const listOfSongs = songs.map((song, index) => {
    return (
      <li key={index}>
        <h3>Title: {song["im:name"].label}</h3>
        <p>Artist: {song["im:artist"].label}</p>
        <p>Position: {index + 1}</p>
      </li>

    )
  })

  return (
    <>
      {listOfSongs}
    </>
  )
}

export default MusicList;