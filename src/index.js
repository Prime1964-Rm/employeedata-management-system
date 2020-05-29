import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Loginad from './Loginad';
// import LoginPage from './Login.component';
// import { BrowserRouter } from 'react-router-dom';
//  import App from './App';
import homepage from './homepage';
// import AddAdmin from './Addadmin';
 import Homepage from './homepage';
import AddEmployee from './AddEmployees/AddEmployees';
import LoginPage from './LoginPage';
import LoginAdmin from './LoginComponent/LoginAdmin';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import EmployeeDetailsTable from './EmployeeDetails/EmployeeDetailsTable';
import EmployeeData from './EmployeeDetails/EmployeeData';
import App from './App';
import NavBar from './MasterComponent/NavBar';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

