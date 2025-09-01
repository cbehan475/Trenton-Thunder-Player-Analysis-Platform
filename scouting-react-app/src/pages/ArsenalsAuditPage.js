import React, { useMemo } from 'react';
import { Box, Container, Typography, Alert, Button, Stack, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function ArsenalsAuditPage() {
  const isProd = process.env.NODE_ENV === 'production';

  const banner = useMemo(() => (
    <Alert severity={isProd ? 'error' : 'info'} sx={{ mb: 2 }}>
      {isProd ? 'This page is disabled in production.' : 'Development-only: Arsenal Audit tools are available here.'}
    </Alert>
  ), [isProd]);

  if (isProd) {
    return (
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>Arsenal Audit (Dev)</Typography>
          <Button component={RouterLink} to="/pitching/arsenals" variant="outlined">Back to Arsenals</Button>
        </Stack>
        {banner}
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>Arsenal Audit (Dev)</Typography>
        <Stack direction="row" spacing={1}>
          <Button component={RouterLink} to="/pitching/arsenals" variant="outlined">Back to Arsenals</Button>
          <Button variant="contained" color="primary" disabled>Export CSV (coming soon)</Button>
        </Stack>
      </Stack>
      {banner}

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Filters</Typography>
          <Typography variant="body2" color="text.secondary">TODO: add needs-review/status filters and search.</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Pitchers</Typography>
          <Typography variant="body2" color="text.secondary">TODO: show audit table with actions (approve merged / keep override) and per-row status.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
