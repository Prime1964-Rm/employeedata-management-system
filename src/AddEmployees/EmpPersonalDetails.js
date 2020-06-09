import React, { Component } from 'react'
import Pic from '../icon/backgrou.jpg';
import logo from '../icon/logo.png';
import './AddEmployee.scss'
import { CssBaseline, Container, Typography, TextField, Button, Paper, AppBar } from '@material-ui/core';
import wall from '../back.jpg'

export class EmpPersonalDetails extends Component {
state={
    value: "female"
}
     handleChange = (event) => {
        this.setState({value:event.target.value})
      };

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        const { onChange } = this.props;
        return (
                        <Paper className="form-contain"   elevation={20} >
                            <h1>Personal</h1>
                            <hr/>
                            <form className="form-styler">
                                <span className="name">
                                <input type="text" placeholder="First Name"  defaultValue={values.firstname} onChange={onChange("firstname")}  className="span-details" />
                                <input placeholder="Last Name"  defaultValue={values.lastname} onChange={onChange("lastname")}  className="span-details" />
                                </span>
                                <input type="email" placeholder="E-mail"  defaultValue={values.email} onChange={onChange("email")} className="form-details" />
                                <input type="password" placeholder="Password" onChange={onChange("password")} defaultValue={values.password}  className="form-details" />
                                <span className="gender">
                                <input type="radio" id="m" name="gender" onClick={onChange("gender")} defaultValue={values.gender} value="Male" />
                                <label id="ml" for="male">Male</label>
                                <input type="radio" id="f" name="gender" onClick={onChange("gender")} defaultValue={values.gender} value="Female" />
                                <label id="fl" for="female">female</label>
                                </span>
                                <Button onClick={this.continue} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', fontFamily:"'Julius Sans One', sans-serif", width: "100%",marginTop:"3vh", color: '#ffffff', fontWeight: "600" }}>Next</Button>
                            </form>
                        </Paper>
                   
        )
    }
}

export default EmpPersonalDetails;
