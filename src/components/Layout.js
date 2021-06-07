import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    display: 'flex'
  },
  main: {
    width: '100%'
  },
  appbar: {
    backgroundColor: '#fff',
    width: 'calc(100% - 240px)'
  },
  toolbar: theme.mixins.toolbar
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideDrawer />
      <div className={classes.main}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <Typography className={classes.text} color='textSecondary'>
              What are you training to today {format(new Date(), 'dd-MM-yyyy')}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
