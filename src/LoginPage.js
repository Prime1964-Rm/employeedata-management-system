import React,{Component} from 'react';
import '../src/Logincomponent.css';
import Pic from './icon/backgrou.jpg';
import Auth from './Auth';


class LoginPage extends Component{
   state={
        change: undefined,
    }

    componentWillMount(){
      if(Auth.isLoggedIn){
        this.props.history.push("/EmployeeDetails");
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
        'Content-Type': 'application/json'
    },
  body: JSON.stringify({email: email, password: pwd})}
  
    fetch(url,obj).then(response => response.json()).then(users=>{
      console.log(users.success);
      
      if(users.success===true){
        // this.setState({change:true})
          //return <Redirect to="/Homepage" Loggedin={true}/>
         Auth.isLoggedIn=true;
         console.log(Auth.isLoggedIn)
         this.props.history.push("/EmployeeDetails")
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
        if(this.state.change===undefined){
        return(
            <div>
                <img src={Pic} alt="background" id="backcardimg"/>
                <div id="loginbody">
                <div id="leftcontent"></div>
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
            </div>
        )
      }
        else if((this.state.change===false)){
          return(
            <div>
                <img src={Pic} alt="background" id="backcardimg"/>
                <div id="loginbody">
                <div id="leftcontent"></div>
                    <div id="rightcontent">
                        <div id="loginform">
                            <input type="email" placeholder="EMAIL" id="email" name="email" onChange={this.onChange} className="details"/>
                            <input type="password" placeholder="PASSOWRD" id="password" name="password" onChange={this.onChange} className="details"/>
                            <input type="checkbox" id="remember" className="details"/>
                            <font id="labfr">Remember Me</font>
                            <a href="#blank" id="fp">ForgotPassword?</a>
                            <input type="submit" value="LOGIN" id="loginbutton" onClick={this.handleSubmit} className="details"/>
                            <a href="#blank" id="signuplabel" onClick={this.Addadmin}>No account? Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
          )}
         
        }
}

export default LoginPage;
