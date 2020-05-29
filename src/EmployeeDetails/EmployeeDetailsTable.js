import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './Employee.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import theme from './UI/Theme'
import { ThemeProvider } from '@material-ui/core';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  
}));

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch',
        
      } 
    },
    tabrow:{
      fontFamily: "'Istok Web', sans-serif",
      color:"black",
      fontWeight:"400"
    },
    abar: {
      background: '#25276b'
    },
    thead:{
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      color:'white'
    },
    login: {
      flexGrow: 1,
      color: 'White',
     
      fontSize: 24
    },
    
    table: {
        minWidth: 650,
      },
    notchedOutline: {
        borderWidth: "3px",
        borderColor: '#2196F3 !important',
        marginBottom: theme.spacing(1),
    },
    cssLabel: {
      
        color :  '#2196F3 !important',
        
      },
      cssFocused: {
      },
   button: {
     
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
       
      },
  }));


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
  
  
  function TablePaginationActions(props) {
    console.log(props)
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
    console.log(count)
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  


    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }


  function EmployeeDetailsTable({values,head}) {
    let history = useHistory();
   function clickHandle(row){
      history.push("/EmployeeData",row)
    }

  console.log(values)
  const [qciid, setQci]= useState(undefined) 
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, values.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  return (
      <React.Fragment>
     {/* <form className={classes.root} noValidate autoComplete="off"> 

     <div className={classes.login}>
      <ElevationScroll>
      <AppBar position="fixed" color="primary" className={classes.abar}>
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.login}>
           {head}
          </Typography>
                <TextField id="outlined-basic" label="Enter qci_id" onChange={(e)=>setQci(e.target.value)} variant="outlined" InputProps={{
                            classes: {
                            notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            },
                        }}
                        />
              
              <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={()=>{
                   let url="http://127.0.0.1:5000/lms/deleteEmployee";
                   let obj= {
                    method : "POST",
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
                    },
                    body : JSON.stringify({qci_id : qciid})
                   };
                   fetch(url,obj).then(response=>response.json()).then(result=>{
                    if(result.success){
                      alert(result.message);
                  }
                  else{
                     console.log(result);
                  }
                   })
                  }}
               >
                 Delete
               </Button>
               
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </div>

    </form> */}
    <TextField style={{marginLeft:"33vw"}} id="outlined-basic" label="Enter qci_id" onChange={(e)=>setQci(e.target.value)} variant="outlined" InputProps={{
                            classes: {
                            notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            },
                        }}
                        />
              
              <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon/>}
                  onClick={()=>{
                   let url="http://127.0.0.1:5000/lms/deleteEmployee";
                   let obj= {
                    method : "POST",
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
                    },
                    body : JSON.stringify({qci_id : qciid})
                   };
                   fetch(url,obj).then(response=>response.json()).then(result=>{
                    if(result.success){
                      alert(result.message);
                  }
                  else{
                     console.log(result);
                  }
                   })
                  }}
               >
                 Delete
               </Button>
  <TableContainer component={Paper}>
  <Table className={classes.table} aria-label="custom pagination table">
  {/* <TableRow className={classes.thead}>
            <TableCell className={classes.thead} align="center">qci_id</TableCell>
            <TableCell className={classes.thead} align="right">Name</TableCell>
            <TableCell className={classes.thead} align="right">Designation</TableCell>
            <TableCell className={classes.thead} align="right">E-mail</TableCell>
            <TableCell className={classes.thead} align="right">Gender</TableCell>
          </TableRow> */}
          
          <TableHead position="sticky" className={classes.thead}>
          <TableRow className={classes.thead}>
            <TableCell className={classes.thead} align="center">qci_id</TableCell>
            <TableCell className={classes.thead} align="right">Name</TableCell>
            <TableCell className={classes.thead} align="right">Designation</TableCell>
            <TableCell className={classes.thead} align="right">E-mail</TableCell>
            <TableCell className={classes.thead} align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
  <TableBody className="tabrow">
    {(rowsPerPage > 0
      ? values.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : values
    ).map((row) => (
      <TableRow className={classes.tabrow} style={{border: '1px solid gray', fontFamily:"'Julius Sans One', sans-serif"}} onClick={()=>clickHandle(row)} key={row.qci_id}>
        <TableCell className={classes.tabrow} component="th" scope="row" align="center">
          {row.qci_id}
        </TableCell>
        <TableCell className={classes.tabrow} style={{ width: 160 }} align="right">
          {row.name}
        </TableCell>
        <TableCell className={classes.tabrow} style={{ width: 160 }} align="right">
          {row.designation}
        </TableCell>
        <TableCell className={classes.tabrow} style={{width : 160}} align="right">
        {row.email}
        </TableCell>
        <TableCell className={classes.tabrow} style={{width : 160}} align="right">
        {row.gender}
        </TableCell>
        {/* <TableCell style={{width : 160}} align="right">
        {row.type_of_employee}
        </TableCell> */}

      </TableRow>
    ))}

    {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    )}
  </TableBody >

        <TableFooter >
          <TableRow align="center">
            <TablePagination 
              rowsPerPageOptions={[6, 8,13, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={values.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}

export default withRouter(EmployeeDetailsTable);