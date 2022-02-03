import React from 'react';

export default function Band({ band }) {
  return <div>
    <h1>This Band was {band.goodLive} Good Live</h1>
    <p>Their Name is {band.name}</p>
    <p>My favorite Album of theirs is {band.bestAlbum}</p>
    <p>{band.bestSong} is my favorite song</p>
    {/* <p>{band.goodLive}</p> */}
  </div>;
}
