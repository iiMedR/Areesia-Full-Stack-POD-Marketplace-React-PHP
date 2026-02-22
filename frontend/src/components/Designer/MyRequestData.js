import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function MyRequestData() {
  // Sample data, populate this with your actual data
  const rows = [
    { id: 1, amount: 150, withdrawalMethod: 'Bank Transfer', status: 'Pending', date: '19/3/2024' },
    { id: 2, amount: 200, withdrawalMethod: 'Cash Plus', status: 'Completed', date: '18/3/2024' },
    // ... other rows
  ];

  return (
    <TableContainer>
      <Table style={{ border: '3px solid black' }}>
        <TableHead>
          <TableRow className="myRequestTableRow">
            <TableCell className='text'>ID</TableCell>
            <TableCell className='text'>Amount</TableCell>
            <TableCell className='text'>Withdrawal Method</TableCell>
            <TableCell className='text'>Status</TableCell>
            <TableCell className='text'>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className="myRequestTableRow">
              <TableCell className='text'>{row.id}</TableCell>
              <TableCell className='text'>{row.amount}</TableCell>
              <TableCell className='text'>{row.withdrawalMethod}</TableCell>
              <TableCell className='text'>{row.status}</TableCell>
              <TableCell className='text'>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyRequestData;
