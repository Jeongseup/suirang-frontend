// components/GameCard.tsx
import React from 'react';
import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

interface GameCardProps {
  game: {
    id: number;
    name: string;
    imageUrl: string;
    ranking: number;
    websiteUrl: string;
    discordUrl: string;
    twitterUrl: string;
    transactionCount: number;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={game.imageUrl} alt={game.name} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {game.name}

          <Button sx={{ ml: 2 }} variant="outlined" size="small" href={'/dashboard/summary'}>
            Summary
          </Button>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ranking: {game.ranking}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Transactions: {game.transactionCount}
        </Typography>
        <Stack direction="row" spacing={1} mt={2}>
          <Button variant="contained" size="small" href={game.websiteUrl} target="_blank">
            Website
          </Button>
          <Button variant="contained" size="small" href={game.discordUrl} target="_blank">
            Discord
          </Button>
          <Button variant="contained" size="small" href={game.twitterUrl} target="_blank">
            Twitter
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
