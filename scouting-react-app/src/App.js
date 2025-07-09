import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GameDateSelector from './components/GameDateSelector';
import PitchersTable from './components/PitchersTable';
import HittersTable from './components/HittersTable';

const GAME_DATES = ['2025-07-06']; // Add more dates as you add files

function App() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [hittersData, setHittersData] = useState([]);
  const [pitchersData, setPitchersData] = useState({});
  const [selectedPitcher, setSelectedPitcher] = useState('');
  const [selectedInning, setSelectedInning] = useState('');

  // Load data on date change
  useEffect(() => {
    fetch(`/data/hitters-${selectedDate}.json`)
      .then(r => r.ok ? r.json() : [])
      .then(data => setHittersData(Array.isArray(data) ? data : []))
      .catch(() => setHittersData([]));
    fetch(`/data/pitchers-${selectedDate}.json`)
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        setPitchersData(data && typeof data === 'object' ? data : {});
        const pitchers = Object.keys(data || {});
        setSelectedPitcher(pitchers[0] || '');
        setSelectedInning(pitchers[0] && data[pitchers[0]] ? Object.keys(data[pitchers[0]])[0] : '');
      })
      .catch(() => {
        setPitchersData({});
        setSelectedPitcher('');
        setSelectedInning('');
      });
  }, [selectedDate]);

  // Update inning when pitcher changes
  useEffect(() => {
    if (selectedPitcher && pitchersData[selectedPitcher]) {
      setSelectedInning(Object.keys(pitchersData[selectedPitcher])[0] || '');
    }
  }, [selectedPitcher, pitchersData]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Trenton Thunder Scouting App
      </Typography>
      <GameDateSelector
        dates={GAME_DATES}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Pitchers
      </Typography>
      <PitchersTable
        pitchersData={pitchersData}
        selectedPitcher={selectedPitcher}
        selectedInning={selectedInning}
        onPitcherChange={setSelectedPitcher}
        onInningChange={setSelectedInning}
      />
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Hitters
      </Typography>
      <HittersTable hittersData={hittersData} />
    </Container>
  );
}

export default App;
