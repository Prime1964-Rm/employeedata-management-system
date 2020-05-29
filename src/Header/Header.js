import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ()=>(
    <div className="header">
        <Link to="/" className="logo-container">
            {/* <Logo className="logo" /> */}
            <h1>Logo</h1>
        </Link>
        
       <div className="options">
            <Link to="/AddEmployee" className="option">Add Employee</Link>
            <Link to="/EmployeeDetails" className="option">Employee Details</Link>
            <Link to="/Contact" className="option">Contact</Link> 
            <Link to="/" className="option">Logout</Link>   
       </div>
    </div>

)

export default Header