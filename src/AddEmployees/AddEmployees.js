import React, { Component } from 'react';
import './AddEmployee.scss'
import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import EmpPersonalDetails from './EmpPersonalDetails';
import EmpBackgroundDetails from './EmpBackgroundDetails';
import LeaveDetails from './LeaveDetails';
import wall from '../back.jpg'




class AddEmployee extends Component{
    
    state={
       step:1,
        qci_id      :   undefined,   
        email       :   undefined,
        password    :   undefined,
        firstname   :   undefined,
        lastname    :   undefined,
        name        :   undefined,
        designation :   undefined,
        emplyoeetype:   undefined,
        bal_cl      :   undefined,
        bal_sl      :   undefined,
        bal_pl      :   undefined,
        bal_ml      :   undefined, 
        bal_ptl     :   undefined,
        bal_eol     :   undefined,
        board       :   undefined,
        gender      :   undefined
    }

    nextStep=(e)=>{
        
        const {step} = this.state;
        this.setState({step:step+1});
    }
    prevStep=(e)=>{
       
        const {step} = this.state;
        this.setState({step:step-1});
    }   

    onChange=(input)=>(event)=>{
        this.setState({[input] : event.target.value});
     }

    onAddEmp=()=>{
        //profile
        let firstname= this.state.firstname; //
        let lastname= this.state.lastname; //
        let name= firstname+" "+lastname; //
        let designation= this.state.designation; //
        
        //About
        let email= this.state.email; //
        let password= this.state.password;
        let emplyoeetype= this.state.type_of_employee; //
        let gender= this.state.gender;
        let board = this.state.board; //

        let qci_id= this.state.qci_id; //
        
        // Leave paper

        let bal_cl = this.state.bal_cl; 
        let bal_sl=this.state.bal_cl;
        let bal_pl=this.state.bal_pl;
        let bal_ml=this.state.bal_ml;
        let bal_ptl= this.state.bal_ptl;
        let bal_eol= this.state.bal_eol;
         
        
        console.log(gender);
        let url="http://127.0.0.1:5000/lms/addEmployee";
        let obj={
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
            },
            body : JSON.stringify({qci_id:qci_id,board:board,gender:gender,email:email,name:name,password:password,designation:designation, type_of_employee:emplyoeetype,bal_cl:bal_cl,bal_pl:bal_pl,bal_ptl:bal_ptl,bal_eol:bal_eol,bal_sl:bal_sl,bal_ml:bal_ml})
        }
        fetch(url,obj).then(response=>response.json()).then(users=>{
            if(users.success){
                alert(users.message);
            }
            else{
               console.log(users);
            }
        })
    }
    
    render(){
        console.log(JSON.stringify(this.state));
        const {step} = this.state;
        const {firstname,lastname,email,qci_id,gender,bal_cl,bal_eol,bal_ml,bal_pl,bal_ptl,bal_sl,board,designation,password,name} = this.state;
        const values = {firstname,lastname,email,qci_id,gender,bal_cl,bal_eol,bal_ml,bal_pl,bal_ptl,bal_sl,board,designation,password,name}
        switch(step){
            case 1: 
            return (
                <div className="details-contain" >
                  <EmpPersonalDetails values={values} nextStep={this.nextStep} onChange={this.onChange}/>
                  </div>
            )
            case 2:
                return(
                    <div className="details-contain" >
                  <EmpBackgroundDetails values={values} nextStep={this.nextStep} prevStep={this.prevStep} onChange={this.onChange}/>
                  </div>
                )  
           case 3:
               return(
                <div className="details-contain">
                    <LeaveDetails values={values} onAddEmp={this.onAddEmp}  prevStep={this.prevStep} onChange={this.onChange}/>
                </div>
               )

        }      


    }

}

export default AddEmployee;

