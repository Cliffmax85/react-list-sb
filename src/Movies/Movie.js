import React from 'react';

export default function Movie(props) {
  return <div>
    <p>{props.title}</p>
    <p>{props.length}</p>
    <p>{props.genre}</p>
    <p>{props.bestPicture}</p>
  </div>;
}
