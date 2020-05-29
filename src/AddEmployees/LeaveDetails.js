import React, { Component } from 'react'
import Pic from '../icon/backgrou.jpg';
import './AddEmployee.scss'
import { Button, Container, Paper, AppBar, Toolbar } from '@material-ui/core';
import wall from '../back.jpg'


export class LeaveDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        const { onChange } = this.props;


        if (values.gender == "Male") {
            return (
                <React.Fragment>
                    <div className="heading">
                        <Container maxWidth="sm" >
                        <Paper className="form-container"  elevation={20} >
                         <h1>Leave Detail</h1 >
                            <hr/>    
                               <form className="form-style">
                                    <span className="name">
                                        <input type="text" placeholder="balance casual leaves" defaultValue={values.bal_cl}  onChange={onChange("bal_cl")} className="span-details" />
                                        <input type="text" placeholder="balance sick leaves" defaultValue={values.bal_sl} name="bal_sl" className="span-details" onChange={onChange("bal_sl")} />
                                    </span>
                                    <span className="name">
                                        <input type="text" placeholder="balance privilege leaves" defaultValue={values.bal_pl}  name="bal_pl" onChange={onChange("bal_pl")} className="span-details" />
                                        <input type="text" className="span-details" defaultValue={values.bal_ptl} placeholder="paternity leave" name="bal_ptl" onChange={onChange("bal_ptl")}  />
                                    </span>
                                    <input type="text" className="form-details"  defaultValue={values.bal_eol} placeholder="extra ordinary leave" name="bal_eol" onChange={onChange("bal_eol")} id="baleol" />
                                    <br />
                                    <Button style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',fontFamily:"'Julius Sans One', sans-serif", marginTop: '2vh', width: "100%", color: '#ffffff', fontWeight: "600" }} onClick={this.back}>Previous</Button>
                                    <Button onClick={this.props.onAddEmp} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', fontFamily:"'Julius Sans One', sans-serif", marginTop: '1vh', width: "100%", color: '#ffffff', fontWeight: "600" }}>SUBMIT</Button>
                                </form>
                            </Paper>
                        </Container>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                   <div className="heading">
                        <Container maxWidth="sm" >
                        <Paper className="form-container"  elevation={20} >
                         <h1>Leave Detail</h1 >
                            <hr/>    
                               <form className="form-style">
                               <span className="name">
                                    <input type="text" placeholder="balance casual leaves" defaultValue={values.bal_cl} id="leaveleft" onChange={onChange("bal_cl")} className="span-details" />
                                    <input type="text" placeholder="balance sick leaves" defaultValue={values.bal_sl} name="bal_sl" className="span-details" id="balsl" onChange={onChange("bal_sl")} />
                                </span>    
                                <span className="name">
                                    <input type="text" placeholder="balance privilege leaves" defaultValue={values.bal_pl} name="bal_pl" onChange={onChange("bal_pl")} id="leaveleft" className="span-details" />
                                    <input type="text" className="span-details" defaultValue={values.bal_ml} placeholder="Balance maternity leave" name="bal_ml" onChange={onChange("bal_ml")} id="balml" />
                                </span>
                                    <input type="text" className="form-details" defaultValue={values.bal_eol} placeholder="Balance extra ordinary leave" name="bal_eol" onChange={onChange("bal_eol")} id="baleol" />
                                    <br />
                                    <Button className="add" style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',fontFamily:"'Julius Sans One', sans-serif", marginTop: '2vh', width: "100%", color: '#ffffff', fontWeight: "600" }} onClick={this.back}>Previous</Button>
                                    <Button onClick={this.props.onAddEmp} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', fontFamily:"'Julius Sans One', sans-serif", marginTop: '1vh', width: "100%", color: '#ffffff', fontWeight: "600" }}>SUBMIT</Button>
                                </form>
                            </Paper>
                        </Container>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default LeaveDetails
