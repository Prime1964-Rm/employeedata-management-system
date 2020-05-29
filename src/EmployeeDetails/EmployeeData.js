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
import { Link, Button, TextField, Input } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import wall from '../back.jpg'
import './Employee.css'
import Modal from 'react-modal';

const innerStyles = makeStyles((theme) => ({


}));


const useStyles = makeStyles((theme) => ({
  maleroot: {
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



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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


function EmployeeData(props) {
  const [modalstatus, setStatus] = useState(false)
  console.log(formvalues)
  const [edit, setEdit] = useState(false);
  console.log(edit);
  var [formvalues, setFormValues] = useState(props.history.location.state);
  setFormValues =(input)=>(event) =>{
    formvalues[input]= event.target.value;
    console.log(formvalues);
  }
  console.log(formvalues)

  function submit(e){
    let url= "http://127.0.0.1:5000/lms/editEmployeeDetails"
    let obj={
      method : "POST",
      headers: {
        "Accept" : "Application/json",
        "Content-Type" : "Application/json",
        "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc"
      },
      body : JSON.stringify({qci_id:formvalues.qci_id,board:formvalues.board,gender:formvalues.gender,email:formvalues.email,name:formvalues.name,password:formvalues.password,designation:formvalues.designation, type_of_employee:formvalues.type_of_employee,bal_cl:formvalues.bal_cl,bal_pl:formvalues.bal_pl,bal_ptl:formvalues.bal_ptl,bal_eol:formvalues.bal_eol,bal_sl:formvalues.bal_sl,bal_ml:formvalues.bal_ml})
    }
    fetch(url,obj).then(res=>res.json()).then(res=>{
      if(res.success){
        alert(res.message);
      }
      else{
        console.log(res);
     }
    })
  }


  const { bal_cl, bal_eol, bal_ml, bal_pl, bal_ptl, bal_sl, board, designation, email, gender, name, qci_id, type_of_employee
  } = props.history.location.state
  const [value, setValue] = React.useState(0);
  let history = useHistory();

  function clickHandle(designation) {
    history.push('/EditEmployee', designation)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function profile() {
    if (gender === "Male") {
      return <img src={Malepic} style={{ height: "25vh" }} alt="profile pic" />
    }
    else {
      return <img src={Femalepic} style={{ height: "25vh" }} alt="profile pic" />
    }

  }

  const classes = useStyles();
  console.log(props.history.location.state)
  return (
    <div classNames={((gender === "Male") ? classes.maleroot : classes.femaleroot)} >
      <Modal width="50vh" isOpen={true}>
        <h2>Enter password</h2>
        <TextField id="outlined-basic" name="type_of_employee" onChange={setFormValues("password")} variant="outlined" />
      </Modal>
      <Grid container spacing={12} >
        <img src={wall} style={{position:"fixed", zIndex:"-1"}}/>
        <Grid item xs={6} sm={3} id="back">
          <Paper className={(gender === "Male") ? classes.maleprofile : classes.femaleprofile} id="back">
            <Paper className={(gender === "Male") ? classes.maleinner : classes.femaleinner}>
              {
                profile(edit)
              }
            </Paper>
            <Paper className={(gender === "Male") ? classes.maleinner : classes.femaleinner}>
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
            onClick={() => setEdit((edit === false) ? true : false)}
            className={classes.button}
            startIcon={<EditIcon/>}
          >Edit</Button>
          <Button variant="contained" style={{color:"white", background:"yellow"}} onClick={submit}>Submit</Button>
          </Paper>
          
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tabs value={value} className={(gender === "Male") ? classes.maletabs : classes.femaletabs} onChange={handleChange} aria-label="simple tabs example" style={{position:"fixed",marginLeft:"4.5vw"}}>
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Leave Balance" {...a11yProps(1)} />
            <Tab label="Contact" {...a11yProps(2)}  />
          </Tabs>
          <TabPanel style={{marginTop:"10vh"}} value={value} index={0}>
            <Paper className={classes.paper}>
              
            <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Name
                </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{name}</Typography>
              {(edit === false) ? null : <TextField name="name" onChange={setFormValues("name")} id="outlined-basic" variant="outlined" />}

              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Designation
                </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{designation}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" name="designation" onChange={setFormValues("designation")}  variant="outlined" />}

              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Gender</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{gender}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" name="gender" onChange={setFormValues("gender")} variant="outlined" />}
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Employee Type</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{type_of_employee}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" name="type_of_employee" onChange={setFormValues("nametype_of_employee")} variant="outlined" />}
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Group</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{board}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" onChange={setFormValues("board")} variant="outlined" />}
            </Paper>
          </TabPanel>
          <TabPanel style={{marginTop:"10vh"}} value={value} index={1}>
            <Paper className={classes.paper}>
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Casual Leave</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_cl}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" onChange={setFormValues("bal_cl")} variant="outlined" />}
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Sick Leaves</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_sl}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" onChange={setFormValues("bal_sl")} variant="outlined" />}
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Privilege Leaves </Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_pl}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" onChange={setFormValues("bal_pl")} variant="outlined" />}
              

          <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
          {(gender==="Male")?<Typography variant="h9" >Paternity Leave</Typography>:<Typography variant="h9" >Maternity Leave</Typography>}
          </Paper>
          {(gender==="Male")?<Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_ptl}</Typography>:<Typography style={{ paddingLeft: '3vw' }} className={(gender == "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_ml}</Typography>}
          {(edit === false) ? null : <TextField id="outlined-basic" variant="outlined" />}

              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >Extra Ordinary Leave</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{bal_eol}</Typography>
              {(edit === false) ? null : (gender === "Male")? <TextField id="outlined-basic" variant="outlined"  onChange={setFormValues("bal_ptl")} />: <TextField id="outlined-basic" variant="outlined" onChange={setFormValues("bal_ml")} />}
            </Paper>
          </TabPanel>
          <TabPanel style={{marginTop:"10vh"}} onChange={setFormValues("bal_eol")} value={value} index={2}>
            
            <Paper className={classes.paper}>
              <Paper className={(gender === "Male") ? classes.maleheading : classes.femaleheading}>
                <Typography variant="h9" >E-mail Address</Typography>
              </Paper>
              <Typography style={{ paddingLeft: '3vw' }} className={(gender === "Male") ? classes.malechilds : classes.femalechilds} variant="12">{email}</Typography>
              {(edit === false) ? null : <TextField id="outlined-basic" onChange={setFormValues("email")} variant="outlined" />}
            </Paper>
          </TabPanel>
        </Grid>     
      </Grid>
    </div>
  );
}

export default withRouter(EmployeeData);