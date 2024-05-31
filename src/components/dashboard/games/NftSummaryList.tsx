import React from 'react';
import Link from 'next/link';
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface Token {
  owner_address: string;
  nft_object_id: string;
  token_id: string;
  token_name: string;
  token_image_url: string;
  token_description: string;
  token_receiver: string;
  event: {
    event_parsed_json: string;
    event_seq: string;
    event_transaction_module: string;
    event_type: string;
    event_bcs: string;
  };
}

interface TokenSummaryListProps {
  tokens: Token[];
}

const TokenSummaryList: React.FC<TokenSummaryListProps> = ({ tokens }) => {
  return (
    <Box p={4} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom>
        NFT Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Token Name</TableCell>
              <TableCell align="center">Token ID</TableCell>
              <TableCell align="center">Owner Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.token_id}>
                <TableCell align="center">
                  <Avatar
                    src={`https://api-mainnet.suifrens.sui.io/suifrens/${token.token_image_url}/svg`}
                    alt={token.token_name}
                    sx={{ width: 56, height: 56 }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" noWrap>
                    {token.token_name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" noWrap>
                    {token.token_id}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body2"
                    noWrap
                    component="a"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                      '&:visited': { color: 'inherit' },
                      '&:focus': { color: 'inherit' },
                    }}
                  >
                    {token.owner_address}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TokenSummaryList;
