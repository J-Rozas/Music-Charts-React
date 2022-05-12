import React, { useEffect, useState } from "react";
import MusicList from "../Components/MusicList";

const MusicContainer = () => {
  const allMusic = [
    {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
  ]

  const [songs, setSongs] = useState([]);
  const [musicType, setMusicType] = useState(allMusic[0].url);


  useEffect(() => {
    getMusicType();
    getSongs();
  }, [musicType])

  const getSongs = () => {
    fetch(musicType)
    .then(response => response.json())
    .then(songs => setSongs(songs.feed.entry));
  }

  const getMusicType = () => {
    return musicType;
  }

  const updateMusicType = (event) => {
    setMusicType(event.target.value)
  }



  return (
    <>
      <select onChange={updateMusicType}>
        <option value={allMusic[0].url}>All</option>
        <option value={allMusic[1].url}>Rock</option>
        <option value={allMusic[2].url}>Dance</option>
        <option value={allMusic[3].url}>Country</option>
      </select>
      <ul>
        <MusicList songs={songs}></MusicList>
      </ul>
    </>
  )
}

export default MusicContainer