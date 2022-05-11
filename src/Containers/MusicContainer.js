import React, { useEffect, useState } from "react";

const MusicContainer = () => {
  [songs, setSongs] = useState(null);

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = () => {
    fetch('https:/itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(songs => setSongs(songs));
  }

  return (
    pass
  )
}

export default MusicContainer