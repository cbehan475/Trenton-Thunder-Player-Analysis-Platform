import { Card, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function HubCard({ title, to, children }) {
  return (
    <Card component={RouterLink} to={to}
      sx={{
        textDecoration: 'none',
        height: '100%', minHeight: 168,
        display: 'flex', flexDirection: 'column',
        p: 1.5, borderRadius: 2, boxShadow: 3, bgcolor: '#fff', color: '#1a1a1a',
        '&:hover': { boxShadow: 6 }
      }}>
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
}
