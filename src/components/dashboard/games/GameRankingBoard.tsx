import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface Game {
  ranking: number;
  name: string;
  txCount: number;
  link: string;
  change: string;
}

const games: Game[] = [
  { ranking: 1, name: 'Panzerdogs', txCount: 487, link: 'https://home.panzerdogs.io/', change: 'up' },
  { ranking: 2, name: 'Arcade champion', txCount: 450, link: 'https://www.bluejaygames.com/', change: 'down' },
  { ranking: 3, name: 'Test1', txCount: 341, link: 'https://home.panzerdogs.io/', change: 'up' },
  { ranking: 4, name: 'Test2', txCount: 302, link: 'https://www.bluejaygames.com/', change: 'down' },
];

const GameRankingBoard: React.FC = () => {
  return (
    <Box p={4} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom>
        Game Ranking Board
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            SUI
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            ETH
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            APTOS
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Game</TableCell>
              <TableCell align="center">Transaction Count</TableCell>
              <TableCell align="center">Play the game!</TableCell>
              <TableCell align="center">Change the Ranking</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((game, index) => (
              <TableRow key={game.ranking}>
                <TableCell align="center">
                  <Avatar sx={{ bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main' }}>{game.ranking}</Avatar>
                </TableCell>
                <TableCell align="center">{game.name}</TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ color: 'red' }}>
                    {game.txCount}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Link href={game.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" color="primary">
                      Play
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {game.change === 'up' ? <FaArrowUp color="green" /> : <FaArrowDown color="red" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GameRankingBoard;
