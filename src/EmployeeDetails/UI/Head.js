
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';                                                     
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  login: {
    flexGrow: 1,
    color: 'white',
  },
 
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function Head({head}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.root}>
            {head}
          </Typography>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </div>
  );
}