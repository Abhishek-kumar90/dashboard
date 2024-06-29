import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, makeStyles } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'email', headerName: 'Email', width: 200 },
  // Add more columns as needed
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon.snow@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com' },
  { id: 3, lastName: 'Stark', firstName: 'Arya', age: 22, email: 'arya.stark@example.com' },
  { id: 4, lastName: 'Targaryen', firstName: 'Daenerys', age: 30, email: 'daenerys.targaryen@example.com' },
  { id: 5, lastName: 'Melisandre', firstName: 'Melisandre', age: 150, email: 'melisandre@example.com' },
  { id: 6, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ferrara@example.com' },
  { id: 7, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'rossini@example.com' },
  { id: 8, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'harvey@example.com' },
  { id: 9, lastName: 'Ricardo', firstName: 'Olivetto', age: 45, email: 'olivetto@example.com' },
  // Add more rows as needed
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 300,
  },
}));

const DataTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h2>Data Table</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Paper>
  );
};

export default DataTable;
