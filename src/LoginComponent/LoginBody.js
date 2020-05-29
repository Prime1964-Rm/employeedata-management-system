import React,{Component} from 'react';
import './Login.css'
import Pic from '../icon/backgrou.jpg';
import Auth from '../Auth'
import { withRouter } from 'react-router';


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

  Addadmin=(event)=>{
    if(event){
    this.props.history.push("/AddAdmin","Signup");
  }
}


      render(){
        console.log(JSON.stringify(this.state.change));
        
        return(
            <div>
                    <div id="rightcontent">
                        <div id="loginform">
                            <input type="email" placeholder="EMAIL" id="email" name="email" onChange={this.onChange} className="details"/>
                            <input type="password" placeholder="PASSOWRD" id="password" name="password" onChange={this.onChange} className="details"/>
                            <input type="checkbox" id="remember" className="details"/>
                            <font id="labfr">Remember Me</font>
                            <a href="#blank" id="fp">ForgotPassword?</a>
                            <input type="submit" value="LOGIN" id="loginbutton" onClick={this.handleSubmit} className="details"/>
                            <a href="#blank" id="signuplabel" onClick={this.Addadmin} >No account? Sign up</a>
                        </div>
                    </div>
            </div>
        )
         
        }
}

export default LoginBody;
