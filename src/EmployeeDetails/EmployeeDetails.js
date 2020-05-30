import React, { Component } from 'react'
import EmployeeDetailsTable from './EmployeeDetailsTable'
import Typography from '@material-ui/core/Typography';
import theme from './UI/Theme'
import { ThemeProvider } from '@material-ui/core';
import './Employee.scss'
import CustomPaginationActionsTable from '../LoginComponent/EditTable';
import { makeStyles } from '@material-ui/core/styles';
import Head from './UI/Head';
import { withRouter } from 'react-router';
import Auth from '../Auth';


const head = " Employee Details"

export class EmployeeDetails extends Component {

    state={
        employeeDetails : [],
        
    }

    componentDidMount(){
        var url="http://127.0.0.1:5000/lms/employeeDetails"
        let obj={
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
            },
        }
            fetch(url,obj).then(response=>response.json()).then(employees=>this.setState({employeeDetails:employees.data}))
    }

   
    
    render() {
        console.log("this is"+ Auth.isLoggedIn);
        console.log(this.state.employeeDetails)
        return (<React.Fragment>
                <div style={{height:"10vh", type:"inline"}}></div>
                <EmployeeDetailsTable  head={head} values={this.state.employeeDetails} />
                
                {/* <RaisedButton hintText="Delete"/> */}
                </React.Fragment>      
        )
    }
}

export default EmployeeDetails;
