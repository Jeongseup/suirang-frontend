import React from 'react';
import { Avatar, Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { Budget } from '@/components/dashboard/overview/budget';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';

interface MetadataProps {
  metadata: {
    name: string;
    imageUrl: string;
    explorerUrl: string;
    homePage: string;
    discord: string;
    twitter: string;
    ranking: Number;
    transactionCount: Number;
    packageId: string[];
    coinType: string;
  };
}

const GameMetadata: React.FC<MetadataProps> = ({ metadata }) => {
  return (
    <div>
      <Stack spacing={5}>
        {/* <Typography variant="h2">Game Summary</Typography> */}
        <Box p={4} boxShadow={5} mb={4}>
          {/* 뱃지 라인 */}
          <Box mb={4}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item display="flex" alignItems="center">
                <Avatar alt={metadata.name} src={metadata.imageUrl} sx={{ width: 80, height: 80, marginRight: 2 }} />
                <Typography variant="h4">{metadata.name}</Typography>
              </Grid>
              <Grid item>
                <Link href={metadata.explorerUrl} target="_blank">
                  <Typography variant="h6" color="primary">
                    SuiScan Explorer Link
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
          {/* 뱃지 라인 */}
          <Box mb={4}>
            <Grid container spacing={2}>
              <Grid item lg={3} sm={6} xs={12}>
                <Budget diff={12} trend="up" sx={{ height: '100%' }} value={String(metadata.ranking)} />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalCustomers
                  diff={16}
                  trend="up"
                  sx={{ height: '100%' }}
                  value={String(metadata.transactionCount)}
                />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TasksProgress sx={{ height: '100%' }} value={75.5} />
              </Grid>
            </Grid>
          </Box>
          {/* 아이콘 라인 */}
          <Box>
            <Grid container justifyContent="flex-end" alignItems="center">
              <Link href={metadata.homePage} target="_blank">
                <Button variant="contained" color="primary">
                  Visit Website
                </Button>
              </Link>
              <Link href={metadata.discord} target="_blank" sx={{ ml: 2 }}>
                <Button variant="contained" color="primary" startIcon={<FaDiscord />}>
                  Discord
                </Button>
              </Link>
              <Link href={metadata.twitter} target="_blank" sx={{ ml: 2 }}>
                <Button variant="contained" color="primary" startIcon={<FaTwitter />}>
                  Twitter
                </Button>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default GameMetadata;
