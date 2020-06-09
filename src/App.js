import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import AddAdmin from './Addadmin';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import AddEmployee from './AddEmployees/AddEmployees';
import Loginad from './Loginad';
import LoginPage from './LoginPage';
import LoginAdmin from './LoginComponent/LoginAdmin'
import EmployeeData from './EmployeeDetails/EmployeeData';
import EmployeeDetailsTable from './EmployeeDetails/EmployeeDetailsTable';
import Auth from './Auth';
import Homepage from './homepage';
import NavBar from './MasterComponent/NavBar';
import EditEMployee from './EmployeeDetails/EditEMployee';
import Header from './Header/Header';
import './App.css'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     console.log("this is"+ Auth.isLoggedIn);
//     return(
    
//     <Route {...rest} render={(props) => (
//       Auth.isLoggedIn === true
//         ? <Component {...props} />
//         : <Redirect to='/' />
//     )} />
//   )}

  

function App(){

        return(
            <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <Switch>
                 <Route exact path="/" component={LoginAdmin}/>  
                <Route exact path="/Homepage" component={Homepage}/> 
                 <Route exact path="/EmployeeDetails" component={EmployeeDetails}/> 
                <Route exact path="/EmployeeData" component={EmployeeData}/>
                <Route exact path="/EmployeeDetailsTable" component={EmployeeDetailsTable}/>
                <Route exact path="/AddAdmin" component={AddAdmin} />
                <Route exact path="/AddEmployee" component={AddEmployee}/>
                {/* <Route exact path="/" component={NavBar}/> */}
                <Route exact path="/EditEmployee" component={EditEMployee}/>
                </Switch>              
                </Router>
            </div>
        )
}

export default App;
