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
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface Transaction {
  transaction_block_digest: string;
  checkpoint_sequence_number: string;
  checkpoint_digest: string;
  block_time: string;
  index: string;
  owner_type: string;
  owner_address: string;
  coin_type: string;
  amount: string;
  process_time: string;
}

interface TransactionSummaryListProps {
  transactions: Transaction[];
}

const TransactionSummaryList: React.FC<TransactionSummaryListProps> = ({ transactions }) => {
  return (
    <Box p={4} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom>
        Token Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Index</TableCell>
              <TableCell align="center">Transaction Digest</TableCell>
              <TableCell align="center">Owner Address</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={transaction.transaction_block_digest}>
                <TableCell align="center">
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{index + 1}</Avatar>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" noWrap>
                    {transaction.transaction_block_digest}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">{transaction.owner_address}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {transaction.amount}
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

export default TransactionSummaryList;
