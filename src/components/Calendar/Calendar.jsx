import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Paper, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 300,
  },
}));

const CustomCalendar = () => {
  const classes = useStyles();
  const [date, setDate] = React.useState(new Date());

  return (
    <Paper className={classes.paper}>
      <h2>Calendar</h2>
      <Calendar onChange={setDate} value={date} />
    </Paper>
  );
};

export default CustomCalendar;
