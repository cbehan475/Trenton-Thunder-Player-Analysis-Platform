import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const STAT_COLUMNS = [
  'Player', 'G', 'PA', 'AB', 'H', 'BB', 'SO', 'AVG', 'OBP', 'SLG', 'OPS'
];

export default function PlayerComparisonTablePage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 4 }}>
      <Typography variant="h4" align="center" sx={{ color: '#FFD600', fontWeight: 800, mb: 3, letterSpacing: 1 }}>
        Player Comparison Table (First Half)
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '98vw', mx: 'auto', overflowX: 'auto', bgcolor: '#1A2233', borderRadius: 2, boxShadow: 4 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {STAT_COLUMNS.map(col => (
                <TableCell key={col} sx={{ color: '#FFD600', fontWeight: 700, bgcolor: '#23304A', minWidth: 80, textAlign: col === 'Player' ? 'left' : 'center' }}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Carsten Sabathia row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Carsten Sabathia</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>19</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>67</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>50</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>9</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>15</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>16</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.180</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.358</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.300</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.658</TableCell> {/* OPS */}
            </TableRow>
            {/* JuJu Stevens row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>JuJu Stevens</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>24</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>103</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>86</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>27</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>10</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>19</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.314</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.408</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.477</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.885</TableCell> {/* OPS */}
            </TableRow>
            {/* Michael Whooley row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Michael Whooley</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>32</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>130</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>109</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>32</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>19</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.294</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.385</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.459</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.844</TableCell> {/* OPS */}
            </TableRow>
            {/* Aaron Whitley row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Aaron Whitley</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>29</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>134</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>116</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>32</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>15</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.276</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.358</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.302</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.660</TableCell> {/* OPS */}
            </TableRow>
            {/* Jakob Poturnak row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Jakob Poturnak</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>23</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>95</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>84</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>25</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>27</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.298</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.337</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.429</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.766</TableCell> {/* OPS */}
            </TableRow>
            {/* Rowan Masse row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Rowan Masse</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>26</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>89</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>69</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>18</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>13</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>13</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.261</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.409</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.304</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.713</TableCell> {/* OPS */}
            </TableRow>
            {/* Harry Genth row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Harry Genth</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>24</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>80</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>60</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>15</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>15</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>22</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.250</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.425</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.350</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.775</TableCell> {/* OPS */}
            </TableRow>
            {/* Aaron Graeber row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Aaron Graeber</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>23</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>83</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>73</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>20</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>10</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>19</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.274</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.361</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.384</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.745</TableCell> {/* OPS */}
            </TableRow>
            {/* Taylor Belza row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Taylor Belza</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>12</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>34</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>28</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>5</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>6</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>7</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.179</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.324</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.179</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.503</TableCell> {/* OPS */}
            </TableRow>
            {/* Danny Corona row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Danny Corona</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>51</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>45</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>9</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>3</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>24</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.200</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.275</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.244</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.519</TableCell> {/* OPS */}
            </TableRow>
            {/* Logan Dawson row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Logan Dawson</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>16</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>42</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>31</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>3</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>10</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>18</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.097</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.310</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.097</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.407</TableCell> {/* OPS */}
            </TableRow>
            {/* Brayden Fraasman row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Brayden Fraasman</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>50</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>44</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>11</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>6</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.250</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.320</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.250</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.570</TableCell> {/* OPS */}
            </TableRow>
            {/* Jayden Melendez row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Jayden Melendez</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>12</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>37</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>30</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>7</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.133</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.297</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.133</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.430</TableCell> {/* OPS */}
            </TableRow>
            {/* John Schroeder row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>John Schroeder</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>28</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>96</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>81</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>17</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>11</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>25</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.210</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.323</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.358</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.681</TableCell> {/* OPS */}
            </TableRow>
            {/* Jaden Sheffield row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Jaden Sheffield</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>22</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>69</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>59</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>8</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>5</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>23</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.136</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.250</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.153</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.403</TableCell> {/* OPS */}
            </TableRow>
            {/* Evin Sullivan row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Evin Sullivan</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>25</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>74</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>60</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>18</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>10</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>15</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.300</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.405</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.333</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.738</TableCell> {/* OPS */}
            </TableRow>
            {/* Cole Leach row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Cole Leach</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>7</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>14</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>12</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>1</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>0</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>9</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.083</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.154</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.167</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.321</TableCell> {/* OPS */}
            </TableRow>
            {/* Jared Beebe row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Jared Beebe</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>17</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>16</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>5</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>0</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>5</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.313</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.353</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.375</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.728</TableCell> {/* OPS */}
            </TableRow>
            {/* Justin Fogel row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Justin Fogel</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>11</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>10</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>1</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>1</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.400</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.455</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.400</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.855</TableCell> {/* OPS */}
            </TableRow>
            {/* Paulo Noris row */}
            <TableRow>
              <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Paulo Noris</TableCell>
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>4</TableCell> {/* G */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>8</TableCell> {/* PA */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>7</TableCell> {/* AB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>2</TableCell> {/* H */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>1</TableCell> {/* BB */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>2</TableCell> {/* SO */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.286</TableCell> {/* AVG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.375</TableCell> {/* OBP */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.286</TableCell> {/* SLG */}
              <TableCell sx={{ color: '#fff', textAlign: 'center' }}>.661</TableCell> {/* OPS */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
