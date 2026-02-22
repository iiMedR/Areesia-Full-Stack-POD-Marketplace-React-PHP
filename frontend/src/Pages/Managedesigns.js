import React from 'react';
import Navbar from '../components/Designer/NavBar';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UserIcon from '../assets/img/Account.png'

function Managedesigns() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'design',
            headerName: 'Design',
            width: 150,
            renderCell: (params) => (
                <img src={params.value} alt="Design" style={{ width: '30px', height: '30px' }} />
            ),
        },
        { field: 'title', headerName: 'Title', width: 400 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'isLive', headerName: 'Is Live', width: 120 },
        { field: 'marginProfit', headerName: 'Margin Profit', width: 150, type: 'number' },
        { field: 'price', headerName: 'Price', width: 130, type: 'number' },
        {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        renderCell: (params) => (
            <IconButton onClick={() => handleDelete(params.id)}>
                <DeleteIcon />
            </IconButton>
        ),
        },
    ];

  const rows = [
    // Sample data, populate this with your actual data
    { id: 1,design: `${UserIcon}`, title: 'Funny Did You Eat The Last Unicorn Dinosaur', status: 'Active', isLive: true, marginProfit: 10, price: 20 },
    { id: 2, title: 'Design 1', status: 'Active', isLive: true, marginProfit: 10, price: 20 },
    { id: 3, title: 'Design 1', status: 'Active', isLive: true, marginProfit: 10, price: 20 },
    { id: 4, title: 'Design 1', status: 'Active', isLive: true, marginProfit: 10, price: 20 },
    { id: 5, title: 'Design 1', status: 'Active', isLive: true, marginProfit: 10, price: 20 },
  ];

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log('Delete item with id:', id);
  };

  return (
    <div>
      <Navbar />
      <div className='Manage_Designs_Container'>
        <h3>Your Designs</h3>
        <div className='data_Container'>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            hideFooter={true} // Disable pagination
          />
        </div>
      </div>
    </div>
  );
}

export default Managedesigns;
