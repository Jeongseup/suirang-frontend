// components/GameList.tsx
'use client';

import React from 'react';
import { Grid } from '@mui/material';

import GameCard from './GameCard';

interface Game {
  id: number;
  name: string;
  imageUrl: string;
  ranking: number;
  websiteUrl: string;
  discordUrl: string;
  twitterUrl: string;
  transactionCount: number;
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <Grid container spacing={3}>
      {games
        .sort((a, b) => a.ranking - b.ranking)
        .map((game) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <GameCard game={game} />
          </Grid>
        ))}
    </Grid>
  );
};

export default GameList;
