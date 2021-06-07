import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  icon: {
    color: theme.palette.primary.main
  },
  active: {
    backgroundColor: '#f4f4f4'
  }
}));
const SideDrawer = () => {
  const location = useLocation();
  const classes = useStyles();

  const sideDrawerItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Add workout', path: '/add', icon: <DirectionsRunIcon /> }
  ];
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Typography variant='h5' color='initial'>
        Mike REAL
      </Typography>
      <Divider />
      <List>
        {sideDrawerItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
