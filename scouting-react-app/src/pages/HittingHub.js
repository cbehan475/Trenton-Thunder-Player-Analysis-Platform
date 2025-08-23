import { Container, Grid } from '@mui/material';
import HubCard from '../components/HubCard';

export default function HittingHub() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="stretch">
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Hitting Game Logs" to="/hitting/logs" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Batted Ball Metrics" to="/hitting/batted-ball" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Player Comparisons to Pro Averages" to="/player-development/comparisons" />
        </Grid>
      </Grid>
    </Container>
  );
}
