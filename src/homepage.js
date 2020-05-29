import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import Auth from './Auth';
import { Link } from 'react-router-dom';


 class Homepage extends Component{
 
    logout=(event)=>{
        Auth.isLoggedIn= false; 
        this.props.history.
        push("/")
    }
    addEmp=(event)=>{
        this.props.history.push("/AddEmployee")
    }
    render(){
        console.log("this is"+ Auth.isLoggedIn);
   if((Auth.isLoggedIn===true)){    
    return(     
            <div id="Homepage">
                <Link to="/">Login</Link>
                <Link to="/EmployeeDetails">EmpDet</Link>
                <img src id="logo"/>
                <h1 className="homepageleave">Welcome to the Homepage</h1>
                <button className="Addemp" onClick={this.addEmp}>Add Employee</button>
                <button className="Logoutbutton" onClick={this.logout}>Log Out</button>
            </div>
);
}
else{

   return <Redirect to="/login"/>
 }
    }

}

export default Homepage;