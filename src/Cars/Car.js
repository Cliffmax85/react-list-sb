import React from 'react';

export default function Car(props) {
  return <div>
    <p>{props.make}</p>
    <p>{props.model}</p>
    <p>{props.year}</p>
    <p>{props.color}</p>
  </div>;
}