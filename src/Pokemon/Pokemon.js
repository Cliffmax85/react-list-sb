import React from 'react';

export default function Pokemon(props) {
  return <div>
    <p>{props.name}</p>
    <p>{props.color}</p>
    <p>{props.number}</p>
    <p>{props.next_evolution}</p>
  </div>;
}
