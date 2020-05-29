import React, { Component } from 'react';
import '../src/Addadmin.css';
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
            <React.Fragment>
               <div className="header">
                    <Container maxWidth="sm" >
                    <Paper style={{  padding: "3vw",paddingTop:"2vw",marginLeft: "7.5vw", marginTop:"13vh", paddingBottom: "4vw",width:"45vh", height:"60%", position:"fixed" }}  elevation={20} >
                    <h1 class="formhead" style={{color:"grey", fontWeight:"100", textAlign:"center"}}>Add Admin</h1 >
                            <hr/>
                            <form>
                                <input type="text" placeholder="First Name" name="firstname" onChange={this.onChange} id="first" className="details" />
                                <input type="text" placeholder="Last Name" name="lastname" id="last" onChange={this.onChange} className="details" />
                                <input type="email" placeholder="E-mail" name="email" id="username" onChange={this.onChange} className="details" />
                                <input type="password" placeholder="Password" name="password" onChange={this.onChange}  className="details" />
                                <input type="text" className="details" placeholder="Phone no" name="phoneno" onChange={this.onChange} id="phoneno" />
                                <Button className="add" style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', marginTop: '4vh',fontFamily:"'Julius Sans One', sans-serif", width: "100%", color: '#ffffff', fontWeight: "600" }} onClick={this.onAdd}>Add</Button>

                            </form>
                        </Paper>
                    </Container>
                </div>
            </React.Fragment>
        )
    }

}

export default AddAdmin;