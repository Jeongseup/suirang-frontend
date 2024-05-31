import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';

import { MainNav } from '@/components/dashboard/layout/main-nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <MainNav />
        <main>
          <Container maxWidth="xl" sx={{ py: '64px' }}>
            {children}
          </Container>
        </main>
      </Box>
    </div>
  );
}
