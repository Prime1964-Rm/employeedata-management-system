import React, { Component } from 'react'
import Pic from '../icon/backgrou.jpg';
import logo from '../icon/logo.png';
import './AddEmployee.scss'
import { CssBaseline, Container, Button, Paper } from '@material-ui/core';
import wall from '../back.jpg'
import theme from '../EmployeeDetails/UI/Theme'

export class EmpBackgroundDetails extends Component {
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
        return (
                    <Paper className="form-contain" elevation={20} >
                    <h1 >About</h1 >
                            <hr/>
                            <form className="form-styler">
                                <input  type="text" defaultValue={values.designation} placeholder="Designation" onChange={onChange("designation")}  className="form-details" />
                                <input type="text" defaultValue={values.type_of_employee} placeholder="type_of_employee" name="type_of_employee"  onChange={onChange("type_of_employee")} className="form-details" />
                                <input type="text" defaultValue={values.board} placeholder="Board" className="form-details"  onChange={onChange("board")} />
                                <input type="text" defaultValue={values.qci_id} className="form-details" placeholder="qci_id" onChange={onChange("qci_id")}  />
                                <br />
                                <Button className="add" style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',fontFamily:"'Julius Sans One', sans-serif", width: "100%", color: '#ffffff', fontWeight: "600" }} onClick={this.back}>Previous</Button>
                                <Button onClick={this.continue} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',fontFamily:"'Julius Sans One', sans-serif",  marginTop: '1vh', width: "100%", color: '#ffffff', fontWeight: "600" }}>Next</Button>

                            </form>
                        </Paper>
        )
    }
}

export default EmpBackgroundDetails
