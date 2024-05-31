import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import homeImg from 'public/assets/home.png';

import { config } from '@/config';
import GameList from '@/components/dashboard/games/GameList';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

const getServerSideProps = async () => {
  const gamesResp = await fetch(`http://13.125.79.9:3300/games`);
  const games = await gamesResp.json();

  return games;
};

// const GameSummaryPage: React.FC<GameSummaryPageProps> = async () => {
//   const { metadata, users } = await getServerSideProps(1);
//   console.log(metadata);

const Page: React.FC = async () => {
  const games = await getServerSideProps();
  console.log(games);

  return (
    <Stack>
      <Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* TODO */}
            <Typography variant="h2" component="h1" gutterBottom>
              Suirang
            </Typography>

            {/* TODO */}
            <Typography variant="h5" paragraph>
              Suirang aims to create a comprehensive platform that visualizes transaction activity and asset information
              for various games within the web3 ecosystem. The platform enables users to easily check rankings and asset
              statuses for each game, engage with the community, and participate in airdrop events.
            </Typography>

            {/* TODO */}
            <Box mt={2}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Sui Overflow Project
              </Button>
              <Button variant="outlined" color="primary">
                Add to Favorites
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* TODO change image */}
            <Image src={homeImg} alt="Project Image" layout="responsive" />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={10}>
        <GameList games={games} />
      </Box>
    </Stack>
  );
};

export default Page;
