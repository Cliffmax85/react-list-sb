import React from 'react';

export default function Movie(props) {
  return <div>
    <h1>{props.title}</h1>
    <p>Is {props.length} minutes long</p>
    <p>The genre is {props.genre}</p>
    <p>Did it win best picture? {props.bestPicture}</p>
  </div>;
}
