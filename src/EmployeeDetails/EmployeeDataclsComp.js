import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Femalepic from '../icon/female.png';
import Malepic from '../icon/male.png';
import { Link, Button, TextField, Input, withStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Component } from 'react';

const innerStyles = makeStyles((theme) => ({


}));


const useStyles = makeStyles((theme) => ({
  maleroot: {
    background: 'skyblue',
    flexGrow: 1,
  },
  femaleroot: {
    background: 'pink',
    flexGrow: 1,
  },
  maleinner: {
    marginTop: theme.spacing(0),
    alignSelf: 'justify',
    background: 'skyblue',
    padding: '1vw'
  },
  femaleinner: {
    marginTop: theme.spacing(0),
    alignSelf: 'justify',
    background: 'pink',
    padding: '1vw'
  },
  maleprofile: {
    display: 'inline-block',
    '& > *': {
      textAlign: 'center'
    },
    background: '#3f51b5',
    alignSelf: 'left',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(60),
    width: theme.spacing(20)
  },
  femaleprofile: {
    display: 'inline-block',
    '& > *': {
      textAlign: 'center'
    },
    background: '#f50057',
    alignSelf: 'left',
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(60),
    width: theme.spacing(20)
  },
  about: {
    marginTop: theme.spacing(4),

  },

  maletabs: {
    backgroundColor: '#3f51b5',
    color: 'white',
    fontWeight: '800',

  },
  femaletabs: {
    backgroundColor: '#f50057',
    color: 'white',
    fontWeight: '800',

  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "#000000",

  },

  femaleheading: {
    display: 'flex',
    width: '90%',
    background: '#f50057',
    paddingLeft: '3vw',
    color: '#ffffff',
    overflow: 'hidden',
    marginBottom: '1vw',
    marginTop: '1vw'
  },

  maleheading: {
    display: 'flex',
    width: '90%',
    background: '#3f51b5',
    paddingLeft: '3vw',
    color: '#ffffff',
    overflow: 'hidden',
    marginBottom: '1vw',
    marginTop: '1vw'
  },

  femalechilds: {
    display: 'flex',
    width: '90%',
    background: 'pink',
    borderRadius: '3px'
  },

  malechilds: {
    display: 'flex',
    width: '90%',
    background: 'skyblue',
    borderRadius: '3px'
  }

}));





class EmployeeDataclsComp extends Component{
   
    state={
        edit: 'false',
        value: 0
    }
        setEdit(){
            (this.state.edit===false)?this.setState({edit:"true"}):this.setState({edit:"false"})
        }
//   console.log(formvalues)
//   const [edit, setEdit] = useState(false);
//   console.log(edit);
//   var [formvalues, setFormValues] = useState(props.history.location.state);
//   setFormValues =(input)=>(event) =>{
//     console.log(input)
//   }
//   console.log(formvalues)


  
      
      TabPanel(props) {
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


//   const { bal_cl, bal_eol, bal_ml, bal_pl, bal_ptl, bal_sl, board, designation, email, gender, name, qci_id, type_of_employee
//   } = props.history.location.state



  clickHandle(designation) {
    this.props.history.push('/EditEmployee', designation)
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue})
  };
  
  profile() {
    if (gender == "Male") {
      return <img src={Malepic} style={{ height: "25vh" }} alt="profile pic" />
    }
    else {
      return <img src={Femalepic} style={{ height: "25vh" }} alt="profile pic" />
    }
  }
render(){
    const { bal_cl, bal_eol, bal_ml, bal_pl, bal_ptl, bal_sl, board, designation, email, gender, name, qci_id, type_of_employee
    } = props.history.location.state
    console.log(designation)
  const {classes} = this.props;
  console.log(props.history.location.state);

  return (
    <div className={(gender == "Male") ? classes.maleroot : classes.femaleroot}>
      <Grid container spacing={12}>
        <Grid item xs={6} sm={3}>
          <Paper className={(gender == "Male") ? classes.maleprofile : classes.femaleprofile}>
            <Paper className={(gender == "Male") ? classes.maleinner : classes.femaleinner}>
              {
                profile(edit)
              }
            </Paper>
            <Paper className={(gender == "Male") ? classes.maleinner : classes.femaleinner}>
              <Typography variant="h6">
                {name}
              </Typography>
              <Typography variant="h9">
                {designation}
              </Typography>
            </Paper>
            <Button
            variant="contained"
            color="secondary"
            background="white"
            onClick={this.setEdit}
            className={classes.button}
            startIcon={<EditIcon/>}
          >Edit</Button>
          </Paper>
          
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tabs value={value} className={(gender == "Male") ? classes.maletabs : classes.femaletabs} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Leave Balance" {...a11yProps(1)} />
            <Tab label="Contact" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Paper className={classes.paper}>

            <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Name
                </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{name}</Typography>
              {(this.state.edit === false) ? null : <TextField name="name" onChange={setFormValues("Hey")} id="outlined-basic" variant="outlined" />}

              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Designation
                </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{designation}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}

              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Gender</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{gender}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Employee Type</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{type_of_employee}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Group</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{board}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper className={classes.paper}>
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Casual Leave</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_cl}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Sick Leaves</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_sl}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Privilege Leaves </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_pl}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
              

          <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
          {(gender=="Male")?<Typography variant="h9" >Paternity Leave</Typography>:<Typography variant="h9" >Maternity Leave</Typography>}
          </Paper>
          {(gender=="Male")?<Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_ptl}</Typography>:<Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_ml}</Typography>}
          {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}

              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Extra Ordinary Leave</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_eol}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h6">Contact</Typography>
            <Paper className={classes.paper}>
              <Paper className={(gender == "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >E-mail Address</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{email}</Typography>
              {(this.state.edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}
            </Paper>
          </TabPanel>

        </Grid>
      </Grid>
    </div>
  );}
}

export default withStyles(withRouter(EmployeeDataclsComp));