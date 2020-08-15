import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/svg/hyke-icon.svg';

class Loginpage extends Component{

 state = {
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
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
   if(password === "" || password.length < 6){
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

  render() {
      return (
      <div className={this.props.className}>
        <div className="wrapper">
          <div className="main-container">
            <div className="logo">
              <Link to="/">
                <Logo />
                <span>HYKE</span>
              </Link>
            </div>
            <h2 className="form-heading">Sign In to your account</h2>
            <div className="form-container">
              <form>
                <div className="inp-field">
                  <label for="email">EMAIL ADDRESS</label>
                  <input className={this.state.emailError ? "error-field-bdr" : ""} onChange={this._handleEmail} type="email" id="email" placeholder="Enter email address"></input>
                  <span className="error-field">
                  {this.state.emailError ? "This email is not valid" : null}
                  </span>
                </div>
                <div className="inp-field">
                  <label for="password">PASSWORD</label>
                  <input className={this.state.passwordError ? "error-field-bdr" : ""} onChange={this._handlePassword} type="text" id="password" placeholder="Enter your password"></input>
                  <span className="error-field">
                  {this.state.passwordError ? "This password in not valid" : null}
                  </span>
                </div>
                <div className="submit-btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <div className="link-field">
              <Link to="/">Forgot your password?</Link>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

/* function Loginpage({className}) {
  return (
    <div className={className}>
      <div className="wrapper">
        <div className="main-container">
          <div className="logo">
            <Link to="/">
              <Logo />
              <span>HYKE</span>
            </Link>
          </div>
          <h2 className="form-heading">Sign In to your account</h2>
          <div className="form-container">
            <form>
              <div className="inp-field">
                <label for="email">EMAIL ADDRESS</label>
                <input type="email" id="email" placeholder="Enter email address"></input>
              </div>
              <div className="inp-field">
                <label for="password">PASSWORD</label>
                <input type="text" id="password" placeholder="Enter your password"></input>
              </div>
              <div className="submit-btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="link-field">
            <Link to="/">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
} */

export default styled(Loginpage)`
  .form-heading{
    color: #3d495a;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .wrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  
  .wrapper .logo {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .wrapper .logo a{
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 5px;
    color: #1a1a1b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .logo a span{
    margin-left: 20px;
  }
  
  .wrapper .main-container{
    width: 340px;
    margin: 0 auto;
  }

  .form-container{
    width: 340px;
    margin: auto;
    background-color: white;
    border-radius: 7px;
    padding: 32px;
    box-shadow: 0 2px 2px 0 rgba(16, 19, 21, 0.1)
  }
  .form-container .inp-field{
    margin-bottom: 20px;
  }
  .form-container span.error-field{
    font-size: 12px;
    color: red;
    margin-top: 10px;
    display: inline-block;
  }
  .form-container label{
    width: 100%;
    display: inline-block;
    font-weight: 500;
    color: #6c7582;
    font-size: 11px;
  }
  .form-container input{
    width: 100%;
    height: 40px;
    border: 1px solid #cacdd1;
    border-radius: 3px;
    margin-top: 3px;
    padding-left: 10px;
    outline: none;
  }
  .form-container .submit-btn{
    margin-top: 30px;
  }
  .form-container .submit-btn button{
    background-color: #22bdbd;
    border-radius: 6px;
    border: 0;
    color: white;
    line-height: 48px;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    text-alight: center;
  }
  .wrapper .link-field{
    text-align: center;
    margin-top: 30px;
  }
  .wrapper .link-field a{
    color: #6c7582;
    font-size: 14px;
    text-decoration: none;
  }

  .error-field-bdr{
    border: 1px solid red !important;
  }
  `;
