import { Container, Grid } from '@mui/material';
import HubCard from '../components/HubCard';

export default function PitchingHub() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="stretch">
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Pitching Game Logs" to="/pitching/logs" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Pitch Movement & Control" to="/pitching/movement-control" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Pitch Type Analysis" to="/pitching/types" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Player Comparisons to Pro Averages" to="/player-development/comparisons" />
        </Grid>
      </Grid>
    </Container>
  );
}
