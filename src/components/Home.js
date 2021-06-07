import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from './Card';

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/notes');
        if (!response.ok) {
          throw new Error('resource not found');
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const onHandleDelete = (id) => {
    const newItems = notes.filter((note) => note.id !== id);
    setNotes(newItems);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Card
              id={note.id}
              title={note.title}
              description={note.description}
              workout={note.workout}
              onDelete={onHandleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
