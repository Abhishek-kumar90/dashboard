import React from 'react';
import { Grid, Paper, Card, CardContent, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 200,
  },
  card: {
    minWidth: 275,
  },
}));

const ResponsiveCards = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <h2>Widget 1</h2>
          <p>This is a sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <h2>Widget 2</h2>
          <p>This is another sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <h2>Widget 3</h2>
          <p>And another sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper}>
          <h2>Widget 4</h2>
          <p>Yet another sample widget content.</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Card Title 1
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Card Title 2
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ResponsiveCards;
