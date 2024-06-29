import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, makeStyles } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  // Add more columns as needed
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  // Add more rows
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 300,
  },
}));

const AnotherTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <h2>Another Table</h2>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </Paper>
  );
};

export default AnotherTable;
