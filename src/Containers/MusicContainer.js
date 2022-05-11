import React, { useEffect, useState } from "react";
import MusicList from "../Components/MusicList";

const MusicContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = () => {
    fetch('https:/itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(songs => setSongs(songs.feed.entry));
  }

  return (
    <ul>
      <MusicList songs={songs}></MusicList>
    </ul>
  )
}

export default MusicContainer