import React from 'react'
import TreadingSong from './TreadingSongs'
import AlbumsList from './Albums'
import QuruPlaylist from './Playlist'
import QuruWorld from './Quruworld'

const RightTreading = () => {
  return (
    <div>
      < TreadingSong />
      <AlbumsList />
      <QuruPlaylist />
      <QuruWorld />
    </div>
  )
}

export default RightTreading