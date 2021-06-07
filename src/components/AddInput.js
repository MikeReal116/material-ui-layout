import React, { useState } from 'react';
import {
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.secondary.light,
    marginBottom: 10
  },
  radio: {
    display: 'block',
    marginTop: 10,
    marginBottom: 10
  },

}));

const AddInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [workout, setWorkout] = useState('bench');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);
    console.log(workout);

    if (title === '') {
      setTitleError(true);
    }
    if (description === '') {
      setDescriptionError(true);
    }
    if (title && description) {
      sendNote();
      history.push('/');
    }
  };

  const sendNote = async () => {
    try {
      await fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          workout
        })
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const classes = useStyles();

  const disabled = title === '' || description === '' ? true : false;
  return (
    <Container>
      <Typography variant='h6' component='h2' className={classes.header}>
        Create New Activity
      </Typography>

      <form
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          label='Title'
          required
          variant='outlined'
          fullWidth={true}
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label='Description'
          required
          variant='outlined'
          fullWidth={true}
          margin='normal'
          multiline={true}
          rows='5'
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionError}
        />

        <FormControl component='fieldset' className={classes.radio}>
          <FormLabel>Workout</FormLabel>
          <RadioGroup
            aria-label='workout'
            name='compounds'
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
          >
            <FormControlLabel value='bench' control={<Radio />} label='Bench' />
            <FormControlLabel value='squat' control={<Radio />} label='Squat' />
            <FormControlLabel
              value='deadlift'
              control={<Radio />}
              label='Deadlift'
            />
          </RadioGroup>
        </FormControl>
        <Button
          color='primary'
          type='submit'
          variant='contained'
          endIcon={<SendIcon />}
          disabled={disabled}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddInput;
