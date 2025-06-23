import React, { useRef } from 'react';

export default function CustomerView({ onCallStart }) {
  const handleStart = () => {
    onCallStart();
    // Placeholder - integrate voice recording or ACS callback here
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Customer View</h2>
      <button onClick={handleStart}>Start Call</button>
    </div>
  );
}
