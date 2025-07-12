import React from 'react';
import './App.css';
import HittersTable from './components/HittersTable';
import hittersData from './data/hitters-2025-06-04';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: '#FFD600', marginBottom: '20px' }}>Hitting Logs - June 4, 2025 vs Williamsport</h1>
      <HittersTable hittersData={hittersData} />
    </div>
  );
}

export default App;