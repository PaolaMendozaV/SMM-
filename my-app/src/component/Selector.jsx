import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ReservationButton from './ReservationButton';
import Calendar from './Calendar';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();

  ///////JOURNAL////////

  const [journalState, setJournalState] = useState([]);
  

  const handleChange = (e) => {
    const journalValue = e.target.value;  
    setJournalState(journalValue)
  };

  ///////Personas///////

  const [peopleState, setPeopleState] = useState([]);
  

  const handlePeopleChange = (e) => {
    const peopleValue = e.target.value;  
    setPeopleState(peopleValue)
  };

//////////////////////////////////////////////////////
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const click = () => {
      console.log('click')
  }


  return (
    <div>
    {/* <Button className={classes.button} onClick={handleOpen}> 
           Open the select
      </Button>*/}

      <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Jornada</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={journalState}
          onChange={handleChange}
        >
          <MenuItem value="jornada">
          </MenuItem>
          <MenuItem value={'Mañana'}>Mañana</MenuItem>
          <MenuItem value={'Tarde'}>Tarde</MenuItem>
          <MenuItem value={'Completa'}>Completa</MenuItem>
        </Select>
        {journalState}
      </FormControl>
      </div>

      <div>
      <Calendar/>
      </div>

      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">N de Personas</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          //open={open}
          //onClose={handleClose}
          //onOpen={handleOpen}
          value={peopleState}
          onChange={handlePeopleChange}
        >
          <MenuItem value="personas">
         
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
        {peopleState}
      </FormControl>
      </div>
      <ReservationButton click = {click}/>
    </div>
  );
}