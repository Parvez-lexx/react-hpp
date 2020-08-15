import React, {Component, Fragment} from 'react';
import './Register.page.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

    render(){
        return(
            <Fragment>
                <div className="wrapper">
                    <div className="main-container">
                        <h2 className="form-heading">Sign In to your account</h2>
                        <div className="form-container">
                            <div className="inp-field">
                                <label for="name">Your Name</label>
                                <input className={this.state.nameError ? "error-field-bdr" : ""} onChange={this._handleName} type="name" id="name" placeholder="Please Enter Your Name"></input>
                                <span className="error-field">
                                    {this.state.nameError ? "This name format is not valid" : null}
                                </span>
                            </div>
                            <div className="inp-field">
                                <label for="email">Your Email</label>
                                <input className={this.state.emailError ? "error-field-bdr" : ""} onChange={this._handleEmail} type="email" id="email" placeholder="Please Enter Your Email"></input>
                                <span className="error-field">
                                    {this.state.emailError ? "This email is not valid" : null}
                                </span>
                            </div>
                            <div className="inp-field">
                                <label for="mobile">Your Mobile</label>
                                <input className={this.state.mobileError ? "error-field-bdr" : ""} onChange={this._handleMobile} type="mobile" id="mobile" placeholder="Please Enter Your Mobile"></input>
                                <span className="error-field">
                                    {this.state.mobileError ? "This mobile number is not valid" : null}
                                </span>
                            </div>
                            <div className="inp-field">
                                <label for="password">Your Password</label>
                                <input className={this.state.passwordError ? "error-field-bdr" : ""} onChange={this._handlePassword} type="password" id="password" placeholder="Please Enter Your Password"></input>
                                <span className="error-field">
                                    {this.state.passwordError ? "This password is not valid" : null}
                                </span>
                            </div>
                            <div className="submit-btn">
                                <button type="button" disabled={this.state.nameError || this.state.emailError || this.state.mobileError || this.state.passwordError}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
