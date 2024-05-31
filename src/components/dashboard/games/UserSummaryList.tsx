import React from 'react';
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

interface User {
  id: string;
  transactionCount: number;
  token: number;
  nft: number;
  startDate: string;
  endDate: string;
  rankingChange: string;
}

interface UserSummaryListProps {
  users: User[];
}

const UserSummaryList: React.FC<UserSummaryListProps> = ({ users }) => {
  // console.log(users);

  return (
    <Box p={4} boxShadow={3} mb={4}>
      <Typography variant="h4" gutterBottom>
        User Ranking Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Event Count</TableCell>
              {/* <TableCell align="center">Token #1</TableCell> */}
              {/* <TableCell align="center">NFT #2</TableCell> */}
              <TableCell align="center">Change the Ranking</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell align="center">
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{index + 1}</Avatar>{' '}
                    <Box ml={2}>
                      <Typography variant="body2" noWrap>
                        {user.id}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {user.transactionCount}
                  </Typography>
                </TableCell>
                {/* <TableCell align="center">{user.token}</TableCell> */}
                {/* <TableCell align="center">{user.nft}</TableCell> */}
                <TableCell align="center">
                  {user.transactionCount % 2 === 0 ? <FaArrowUp color="green" /> : <FaArrowDown color="red" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserSummaryList;
