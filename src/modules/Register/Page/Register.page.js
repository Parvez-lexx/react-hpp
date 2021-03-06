import React, {Component, Fragment} from 'react';
import './Register.page.css';
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {FieldInput} from "../../common/components/FieldInput"; 
import {WhiteButton, BlueButton} from '../../common/components/Button.page';

export default class Registerpage extends Component{
    state = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        nameError: false,
        emailError: false,
        mobileError: false,
        passwordError: false
    }

    _handleName = (e) => {
        const name = e.target.value;
        if(name === "" || !new RegExp(/^[a-zA-Z]*$/g).test(name)) {
            this.setState({
                name: name,
                nameError: true
            })
        }
        else{
            this.setState({
                name: name,
                nameError: false
            })
        }
    }

    _handleEmail = (e) => {
        const email = e.target.value; 
        if(email === "" || !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)){
         this.setState({
           email: email,
           emailError: true
         })
        }
        else{
         this.setState({
           email: email,
           emailError: false
         })
        } 
    }

    _handlePassword = (e) => {
        const password = e.target.value;
        if(password === "" || password.length <6) {
            this.setState({
                password: password,
                passwordError: true
            })
        }
        else{
            this.setState({
                password: password,
                passwordError: false
            })
        }
    }

    _handleMobile = (e) => {
        const mobile = e.target.value;
        if(mobile === "" || new RegExp(/^[a-zA-Z]*$/g).test(mobile) || mobile.length !=10) {
            this.setState({
                mobile: mobile,
                mobileError: true
            })
        }
        else{
            this.setState({
                mobile: mobile,
                mobileError: false
            })
        }
    }

    _handleSubmit = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
         console.log(this)
         this.props.history.push("/user")
         console.log(response);
       })
    }

    render(){
        return(
            <Fragment>
                <div className="wrapper">
                    <div className="main-container">
                        <h2 className="form-heading">Sign In to your account</h2>
                        <div className="form-container">
                            <div className="inp-field">
                                <label for="name">Your Name</label>
                                {/* <input className={this.state.nameError ? "error-field-bdr" : ""} onChange={this._handleName} type="name" id="name" placeholder="Please Enter Your Name"></input> */}
                                <FieldInput onChange={this._handleName} placeholder="Please Enter Your Name" isError={this.state.nameError} id="name" />
                                {this.state.nameError ?
                                <span className="error-field">
                                "This name format is not valid"
                                </span>
                                : null}
                            </div>
                            <div className="inp-field">
                                <label for="email">Your Email</label>
                                <FieldInput onChange={this._handleEmail} placeholder="Please Enter Your Email" isError={this.state.emailError} id="email" />
                                {this.state.emailError ?
                                <span className="error-field">
                                "This email is not valid"
                                </span>
                                : null}
                            </div>
                            <div className="inp-field">
                                <label for="mobile">Your Mobile</label>
                                <FieldInput 
                                    onChange={this._handleMobile} 
                                    placeholder="Please Enter Your Mobile" 
                                    isError={this.state.mobileError} id="number" 
                                />
                                {this.state.mobileError ?
                                <span className="error-field">
                                "This mobile number is not valid"
                                </span>
                                : null}
                            </div>
                            <div className="inp-field">
                                <label for="password">Your Password</label>
                                <FieldInput onChange={this._handlePassword} placeholder="Please Enter Your Password" isError={this.state.passwordError} id="password" type="password" />
                                {this.state.passwordError ?
                                <span className="error-field">
                                "This password is not valid"
                                </span>
                                : null}
                            </div>
                            {/* <div className="submit-btn">
                                <button type="button" disabled={!this.state.name || !this.state.mobile || !this.state.email || !this.state.password || this.state.nameError || this.state.emailError || this.state.mobileError || this.state.passwordError}  onClick={this._handleSubmit}>Submit</button>
                            </div> */}
                            <div>
                                <WhiteButton disabled={!this.state.email || !this.state.password || this.state.emailError || this.state.passwordError } onClick={this._handleSubmit}>Cancel</WhiteButton>
                                <BlueButton disabled={!this.state.email || !this.state.password || this.state.emailError || this.state.passwordError } onClick={this._handleSubmit}>Submit</BlueButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
