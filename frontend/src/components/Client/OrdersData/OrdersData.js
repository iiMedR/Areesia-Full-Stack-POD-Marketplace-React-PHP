import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Link } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import InvoiceIcon from '@mui/icons-material/DescriptionOutlined';

function OrdersData() {
  // Sample data, populate this with your actual data
  const rows = [
    { invoiceId: 100001, total: 150, billedTo: 'Mohamed Reda', status: 'Confirmation Phase', date: '19/3/2024' },
    { invoiceId: 100002, total: 250, billedTo: 'Mohamed Reda', status: 'Processing Phase', date: '19/3/2024' },
  ];

  return (
    <TableContainer>
      <Table style={{ border: '3px solid black' }}>
        <TableHead>
          <TableRow className="myRequestTableRow">
            <TableCell className='text'>Invoice ID</TableCell>
            <TableCell className='text'>Total</TableCell>
            <TableCell className='text'>Billed To</TableCell>
            <TableCell className='text'>Status</TableCell>
            <TableCell className='text'>Date</TableCell>
            <TableCell className='text'>Invoice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className="myRequestTableRow">
              <TableCell className='text'>{row.invoiceId}</TableCell>
              <TableCell className='text'>{row.total}</TableCell>
              <TableCell className='text'>{row.billedTo}</TableCell>
              <TableCell className='text'>{row.status}</TableCell>
              <TableCell className='text'>{row.date}</TableCell>
              <TableCell className='text'><Link to={`/invoice?id=${row.invoiceId}`} className='text'><InvoiceIcon/></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrdersData;
