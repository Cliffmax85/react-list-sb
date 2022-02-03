import React from 'react';

export default function Band({ band }) {
  return <div>
    <p>{band.name}</p>
    <p>{band.bestAlbum}</p>
    <p>{band.bestSong}</p>
    <p>{band.goodLive}</p>
  </div>;
}
