import React, { Component } from 'react';
import '../src/Addadmin.scss';
import Pic from './icon/backgrou.jpg';
import logo from '../src/icon/logo.png';
import { Redirect } from 'react-router';
import { Container, Paper, Button } from '@material-ui/core';
class AddAdmin extends Component {
    state = {

    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onAdd = () => {
        let email = this.state.email;
        let password = this.state.password;
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let phoneno = this.state.phoneno;
        let name = firstname + lastname;
        let url = "http://127.0.0.1:5000/lms/admin";

        let obj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
            },
            body: JSON.stringify({ email: email, password: password, name: name, phoneno })
        }
        fetch(url, obj).then(response => response.json()).then(adminuser => {
            if (adminuser.success === true) {
                console.log(adminuser);
                alert("User Added Successfully");
                this.props.history.push("Homepage");

            }
            else {
                console.log(adminuser);
                alert("Login Failed");
            }
        }).catch(error => alert(JSON.stringify(error)));
    }

    render() {
        // console.log(JSON.stringify(this.state));
        return (
            <div className="details-container">
            <div className="heading">
                <Container maxWidth="sm" >
                    <Paper className="form-container"  elevation={20} >
                        <h1>Add Admin</h1>
                        <hr/>
                        <form className="form-style">
                            <span className="name">
                                <input type="text" placeholder="First Name" name="firstname" onChange={this.onChange}  className="span-details" />
                                <input type="text" placeholder="Last Name" name="lastname"onChange={this.onChange} className="span-details" />
                            </span>
                                <input type="email" placeholder="E-mail" name="email" onChange={this.onChange} className="form-details" />
                                <input type="password" placeholder="Password" name="password" onChange={this.onChange}  className="form-details" />
                                <input type="text" className="form-details" placeholder="Phone no" name="phoneno" onChange={this.onChange}  />
                                <Button className="add" style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', marginTop: '4vh',fontFamily:"'Julius Sans One', sans-serif", width: "100%", color: '#ffffff', fontWeight: "600" }} onClick={this.onAdd}>Add</Button>

                            </form>
                        </Paper>
                    </Container>
                </div>
                </div>
        )
    }

}

export default AddAdmin;