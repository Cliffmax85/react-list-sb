import React from 'react';
import Band from './Band';

export default function BandList({ bands }) {
  return <div>
    {bands.map((band, i) =>
      <Band key={`${band}-${i}`} band={band} />)}
  </div>;
}
