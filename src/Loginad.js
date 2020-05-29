 import React,{Component} from 'react';

class Loginad extends Component{

state = {
  change: undefined,
  clicked: undefined
}

 onChange=(event)=>{
  this.setState({[event.target.name]:event.target.value})
 }

 click=(event)=>{
    this.setState({clicked: true});
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
    console.log(users);
    if(users.success){
      alert("Login Successful")
      this.setState({change:true})
    }
    else{
      this.setState({change:false})
    }
  }).catch();
}
  render(){
    //console.log(JSON.stringify(this.state));
    if(this.state.change===undefined){
    return(
      <div>
        <input type="email" name="email" placeholder="E-mail" onChange={this.onChange}/><br/><br/>
        <input type="password" name="password" placeholder="password" onChange={this.onChange}/><br/><br/>
        <button name="click" onClick={this.handleSubmit}>Click Here</button>
      </div>
    );
  }
  else if(this.state.change===false){
    return(
      <div>
        <input type="email" name="email" placeholder="E-mail" onChange={this.onChange}/><br/><br/>
        <input type="password" name="password" placeholder="password" onChange={this.onChange}/><br/><br/>
        <button name="click" onClick={this.handleSubmit}>Click Here</button>
      </div>
    );
  }
  else if((this.state.change===true)&&(this.state.clicked===undefined)){
      return(
        <div>
          <h1>HomePage</h1>
          <button onClick={this.click}>SignUp</button>
        </div>
      );
  }
  else if((this.state.change===true)&&(this.state.clicked===true)){
     return(
       <div>
         <h1>Registration Code</h1>
       </div>
     )
  }
}

}

export default Loginad;