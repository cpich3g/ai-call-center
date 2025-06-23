import React, { useEffect, useState } from 'react';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default function AgentView({ callCount }) {
  const [transcript, setTranscript] = useState('');
  const [sentimentScore, setSentimentScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (running) {
      const id = setInterval(() => setDuration(d => d + 1), 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [running]);

  // Placeholder for connecting to backend websocket and receiving transcripts
  const startMetrics = () => {
    setRunning(true);
    // Example: update transcript and sentiment with a fake message
    const message = 'Welcome to the AI call center';
    setTranscript(t => t + message + '\n');
    setSentimentScore(sentiment.analyze(message).comparative);
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Agent View - Justin</h2>
      <p>Calls taken: {callCount}</p>
      <p>Call Duration: {duration}s</p>
      <p>Sentiment: {sentimentScore.toFixed(2)}</p>
      <pre style={{ background: '#eee', padding: '1rem' }}>{transcript}</pre>
      {!running && <button onClick={startMetrics}>Begin Metrics</button>}
    </div>
  );
}
