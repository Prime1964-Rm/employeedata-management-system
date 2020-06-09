import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from '../EmployeeDetails/UI/Theme'
import LoginBody from './LoginBody'

const head = "Employee Management"
const clickval = "Login"

export class LoginAdmin extends Component {
   

    render() {
        return (
            <div className="details-contain"> 
                <LoginBody/>
            </div>
        )
    }
}

export default LoginAdmin

