import React from 'react';

export default function Car(props) {
  return <div>
    <h1>Car is a {props.make} from {props.year}</h1>
    <p>{props.make}</p>
    <p>{props.model}</p>
    <p>{props.year}</p>
    <p>{props.color}</p>
  </div>;
}