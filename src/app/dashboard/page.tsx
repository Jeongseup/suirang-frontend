import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import homeImg from 'public/assets/home.jpg';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
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
              Suirang is description for about our project.Here is description for about our project.Here is description
              for project.Here is description for about our project.
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
      <Box>
        <Grid container spacing={3}>
          <Grid lg={3} sm={6} xs={12}>
            <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TasksProgress sx={{ height: '100%' }} value={75.5} />
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: '100%' }} value="$15k" />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
