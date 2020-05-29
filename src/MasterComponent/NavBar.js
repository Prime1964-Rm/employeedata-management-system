import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { useHistory, Link } from "react-router-dom";
import Auth from '../Auth';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
import AddAdmin from '../Addadmin';
import AddEmployee from '../AddEmployees/AddEmployees';
import { Sticky, StickyContainer } from 'react-sticky';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './MasterStyle.css'




var i = 0
const useStyles = makeStyles((theme) => ({
    appBar:{
      background: 'transparent',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        background: 'transparent'
    },
    title: {
        flexGrow: 1,
    },
    tab: {
        flexGrow: 1,
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function ElevationScroll(props) {
    const { children, window } = props;
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
  
 function NavBar({ tabs }) {
   
    // let history = useHistory();
    console.log(tabs);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    function handleClick(tab) {
        // history.push("/"+tab);
        console.log("/"+tab)
      }
      if (Auth.isLoggedIn === true) {
        return (
            <div className={classes.root}>
                  <ElevationScroll>
                 
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            EmployeeManage
                        </Typography>
                        <Tabs  value={value} className={classes.appBar} onChange={handleChange}  aria-label="simple tabs example">
                        <Tab label="Item One"  {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                </ElevationScroll>
                <TabPanel value={value} index={0}>
                     <AddEmployee/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <EmployeeDetails/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AddAdmin/>
                </TabPanel>
            </div>    
            
        )}
    else {
        return (
            <div className={classes.root} id="mainbackground">
                <ElevationScroll>
                <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', color:"gray", fontWeight:"400"}}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} style={{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6"  className={classes.title}>
                            {/* Employee Management System */}
                        </Typography>
                        <Tabs style={{fontFamily:"'Julius Sans One', sans-serif",fontWeight:"600"}} value={value} onChange={handleChange}  aria-label="simple tabs example">
                        <Tab style={{fontFamily:"'Julius Sans One', sans-serif",fontWeight:"600"}} label="Add Employee" {...a11yProps(0)}/>
                        <Tab style={{fontFamily:"'Julius Sans One', sans-serif",fontWeight:"600"}} label="Employee Details" {...a11yProps(1)} />
                        <Tab style={{fontFamily:"'Julius Sans One', sans-serif",fontWeight:"600"}} label="Add Admin" {...a11yProps(2)} />
                        </Tabs>
                        <Button style={{fontFamily:"'Julius Sans One', sans-serif",fontWeight:"600"}} color="inherit" >Logout</Button>
                    </Toolbar>
                </AppBar>
                </ElevationScroll>
                <TabPanel value={value} index={0}>
                 <AddEmployee/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <EmployeeDetails/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AddAdmin/>
                </TabPanel>
                
            </div>    

        )}
    

}
export default NavBar