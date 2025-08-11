import { Container, Grid } from '@mui/material';
import HubCard from '../components/HubCard';

export default function PlayerDevHub() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="stretch">
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Pitcher Development Plans" to="/player-development/pitchers" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Hitter Development Plans" to="/player-development/hitters" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <HubCard title="Player Comparison Table" to="/player-development/comparisons" />
        </Grid>
      </Grid>
    </Container>
  );
}
