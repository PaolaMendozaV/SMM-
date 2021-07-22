import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
},
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  const [dateSelect, changeDateSelect]= useState(new Date());
  
  const dateReservation= (e) => {
    const dateUser = [e.target.value];  
    changeDateSelect(dateSelect)
    console.log(dateUser)
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Fecha"
        type="date"
        // disablePast="true" intentando bloquear ciertas fechas ...
        defaultValue= {dateSelect} 
        onChange= {dateReservation}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
