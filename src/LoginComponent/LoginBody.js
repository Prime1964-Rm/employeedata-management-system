import React,{Component} from 'react';
import './Login.scss'
import Pic from '../icon/backgrou.jpg';
import Auth from '../Auth'
import { withRouter } from 'react-router';
import { Paper, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


class LoginBody extends Component{
   state={
        change: undefined,
    }
    
    componentWillMount(){
      if(Auth.isLoggedIn){
        this.props.history.push("/Homepage");
      }
    }
click=(event)=>{
    this.setState({clicked: true});
 }

onChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}

handleSubmit=(event)=>{
    var email = this.state.email;
    console.log(email);
    var pwd = this.state.password;
    console.log(pwd);
    var url= "http://127.0.0.1:5000/lms/loginAdmin"
    var obj ={
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
    },
  body: JSON.stringify({email: email, password: pwd})}
  
    fetch(url,obj).then(response => response.json()).then(users=>{
      console.log(users.success);
      
      if(users.success===true){
         this.setState({change:true})
          console.log(this.state.change)
         Auth.isLoggedIn=true;
         console.log(Auth.isLoggedIn)
         this.props.history.push("/Homepage")
        alert("Login Successful") 
      }
      else{
        this.setState({change:false})
        alert("Login Failed")
      }
    }).catch(error=>alert(error));
  }

//   Addadmin=(event)=>{
//     if(event){
//     this.props.history.push("/AddAdmin","Signup");
//   }
// }


      render(){
        console.log(JSON.stringify(this.state.change));
        
        return(
            
              <React.Fragment >
                <div className="heading">
                    <Container maxWidth="sm" >
                        <Paper className="form-container"  elevation={20} >
                            <h1>Login</h1>
                            <hr/>
                            <form className="form-style">
                            <input type="email" placeholder="EMAIL"  name="email" onChange={this.onChange} className="form-details"/>
                            <input type="password" placeholder="PASSOWRD"  name="password" onChange={this.onChange} className="form-details"/>
                            <span className="align-in-row">
                            <input type="checkbox"  className="check"/>
                            <font id="rem" >Remember Me</font>
                            <a href="#blank" id="fp">ForgotPassword?</a>
                            </span>
                            <Button onClick={this.handleSubmit} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', fontFamily:"'Julius Sans One', sans-serif", marginTop: '3vh', width: "100%", color: '#ffffff', fontWeight: "600" }}>SUBMIT</Button>
                            <Link to="/AddAdmin" style={{marginTop:"3vh"}}>No account? Sign up</Link>
                            
                            </form>
                        </Paper>
                      </Container>
                    </div>
                </React.Fragment>
            
        )
         
        }
}

export default LoginBody;
