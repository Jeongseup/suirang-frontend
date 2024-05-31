'use client';

import * as React from 'react';
import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { GameController } from '@phosphor-icons/react/dist/ssr/GameController';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';

import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', minHeight: '64px', px: 2 }}>
          <GameController size={30} />

          <Link href="/" variant="h5">
            Home
          </Link>

          <Link href="/dashboard/summary" variant="h5">
            Game Summary
          </Link>

          <Link href="/dashboard/community" variant="h5">
            Community
          </Link>

          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}></Stack>
        </Stack>
      </Box>
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
