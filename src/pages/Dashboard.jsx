import React from 'react';
import { Grid, Paper, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Widget 1</h2>
          <p>This is a sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Widget 2</h2>
          <p>This is another sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Widget 3</h2>
          <p>And another sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Widget 4</h2>
          <p>Yet another sample widget content.</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
