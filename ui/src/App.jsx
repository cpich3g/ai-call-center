import React, { useState } from 'react';
import CustomerView from './components/CustomerView';
import AgentView from './components/AgentView';

export default function App() {
  const [callCount, setCallCount] = useState(0);

  const handleCallStart = () => {
    setCallCount(c => c + 1);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      <CustomerView onCallStart={handleCallStart} />
      <AgentView callCount={callCount} />
    </div>
  );
}
