import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const CardItem = ({ title, description, workout, id, onDelete }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label='avatar'></Avatar>}
        action={
          <IconButton aria-label='delete note' onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={title}
        subheader={workout}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
