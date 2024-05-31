import React from 'react';
import { Stack } from '@mui/system';

import gameData from '@/data/gameData_1.json';
import GameMetadata from '@/components/dashboard/games/GameMetadata';
import UserSummaryList from '@/components/dashboard/games/UserSummaryList';

interface GameSummaryPageProps {
  metadata: any;
  users: any[];
}

const getServerSideProps = async (id: Number) => {
  // http://13.125.79.9:3300/sui-web3/ranking/1?startDate=2024-05-01
  // http://13.125.79.9:3300/sui-web3/asset-tracking/nft/{gameId}?page=1&pageSize=10&gameId=1&startDate=2024-05-01
  // http://13.125.79.9:3300/sui-web3/event/{gameId}?page=1&pageSize=10&gameId=1&startDate=2024-05-01
  // http://13.125.79.9:3300/sui-web3/asset-tracking/coin/{gameId}?page=1&pageSize=10&gameId=1&startDate=2024-05-01

  const gameResp = await fetch(`http://13.125.79.9:3300/games/${id}`);
  const gameMetaData = await gameResp.json();

  const rankingResp = await fetch(`http://13.125.79.9:3300/sui-web3/ranking/${id}?startDate=2024-05-01`);
  const userRanks = await rankingResp.json();

  return {
    metadata: gameMetaData,
    users: userRanks,
  };
};

const GameSummaryPage: React.FC<GameSummaryPageProps> = async () => {
  const { metadata, users } = await getServerSideProps(1);
  console.log(metadata);

  return (
    <Stack spacing={3}>
      <GameMetadata metadata={metadata} />
      <UserSummaryList users={users} />
    </Stack>
  );
};

export default GameSummaryPage;
