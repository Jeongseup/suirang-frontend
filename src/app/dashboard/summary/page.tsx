import React from 'react';
import { Stack } from '@mui/system';

import CoinSummaryList from '@/components/dashboard/games/CoinSummaryList';
import GameMetadata from '@/components/dashboard/games/GameMetadata';
import NftSummaryList from '@/components/dashboard/games/NftSummaryList';
import UserSummaryList from '@/components/dashboard/games/UserSummaryList';

interface GameSummaryPageProps {
  metadata: any;
  users: any[];
  coins: any[];
}

const getServerSideProps = async (id: Number) => {
  const nftResp = await fetch(
    `http://13.125.79.9:3300/sui-web3/asset-tracking/nft/${id}?page=1&pageSize=10&gameId=1&startDate=2024-05-01`
  );
  const nfts = await nftResp.json();

  // const eventResp = await fetch(
  //   `http://13.125.79.9:3300/sui-web3/event/${id}?page=1&pageSize=10&gameId=1&startDate=2024-05-01`
  // );
  const coinResp = await fetch(
    `http://13.125.79.9:3300/sui-web3/asset-tracking/coin/${id}?page=1&pageSize=10&gameId=1&startDate=2024-05-01`
  );
  const coins = await coinResp.json();

  const gameResp = await fetch(`http://13.125.79.9:3300/games/${id}`);
  const gameMetaData = await gameResp.json();

  const rankingResp = await fetch(`http://13.125.79.9:3300/sui-web3/ranking/${id}?startDate=2024-05-01`);
  const userRanks = await rankingResp.json();

  return {
    metadata: gameMetaData,
    users: userRanks,
    coins: coins,
    nfts: nfts,
  };
};

const GameSummaryPage: React.FC<GameSummaryPageProps> = async () => {
  const { metadata, users, coins, nfts } = await getServerSideProps(1);

  return (
    <Stack spacing={3}>
      <GameMetadata metadata={metadata} />
      <UserSummaryList users={users} />
      <CoinSummaryList transactions={coins} />
      <NftSummaryList tokens={nfts} />
    </Stack>
  );
};

export default GameSummaryPage;
