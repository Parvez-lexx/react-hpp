import React, { Component } from 'react';
import styled from 'styled-components';
import { FieldInput } from '../../common/components/FieldInput';
import {ReactComponent as Logo} from '../../../assets/svg/hyke-icon1.svg';
import { BlueButton, WhiteButton } from '../../common/components/Button.page';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

class PasswordInputComponent extends Component {

    state = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        oldPasswordError: false,
        newPasswordError: false,
        confirmPasswordError: false,
        passwordMatchError: false,
        eyeIcon: true,
        passwordTaken: false
    }

    _toggleClick = () => {
        console.log("state :", this.setState.eyeIcon )
        this.setState({
            eyeIcon: !this.state.eyeIcon
        });
    }

    _handleSubmit = () => {
        if(this.state.oldPassword === ""){
            this.setState({
                oldPasswordError: true
            })
        }else{
            this.setState({
                oldPasswordError: false
            })
        }

        if(this.state.newPassword === ""){
            this.setState({
                newPasswordError: true
            })
        }else{
            this.setState({
                newPasswordError: false
            })
        }

        if(this.state.confirmPassword === ""){
            this.setState({
                confirmPasswordError: true
            })
        }else{
            this.setState({
                confirmPasswordError: false
            })
        }
        
        if(this.state.newPassword === this.state.confirmPassword){
            this.setState({
                passwordMatchError: false
            })
        }
        else{
            this.setState({
                passwordMatchError: true
            })
        }

    } 

    oldPassword = (e) => {
        const oldPassword = e.target.value;
        this.setState({
            oldPassword: oldPassword
        })
    }

    newPassword = (e) => {
        const newPassword = e.target.value;
        if(newPassword === "jitender"){
            this.setState({
                passwordTaken: true
            })
        }else{
            this.setState({
                passwordTaken: false
            })
        }
        this.setState({
            newPassword: newPassword
        })
    }

    confirmPassword = (e) => {
        const confirmPassword = e.target.value;
        this.setState({
            confirmPassword: confirmPassword
        })
    }
    

    render() {
        console.log("state :", this.state)
        return(
            <div className={this.props.className}>
                <div className="page-wrapper">
                    <div className="container">
                        <div className="logo">
                            <Logo style={{width: 130}} />
                        </div>
                        <h2>Please reset your password!</h2>
                        <div className="form-wrapper">
                            <div className="inp-field">
                                <FieldInput onChange={this.oldPassword} placeholder="Enter old password" isError={this.state.oldPasswordError} id="oldPassword" type="password" />
                                {this.state.oldPasswordError ?
                                <span className="error-field">
                                "Please check the password"
                                </span>
                                : null}
                            </div>
                            <div className="inp-field">
                                <FieldInput onChange={this.newPassword} placeholder="Enter new password" isError={this.state.newPasswordError} id="newPassword" type="password" />
                                {this.state.newPasswordError ?
                                <span className="error-field">
                                "This password is not valid"
                                </span>
                                : null}

                                {this.state.passwordTaken ?
                                 <span className="error-field">
                                 "This password is already been taken"
                                 </span> 
                                 : null}
                            </div>
                            <div className="inp-field eye-relative">
                                <FieldInput 
                                 onChange={this.confirmPassword}
                                 placeholder="Confirm new password" 
                                 isError={this.state.confirmPasswordError} id="confirmPassword" type={this.state.eyeIcon ? "password" : "text"} />
                                {this.state.confirmPasswordError ?
                                <span className="error-field">
                                "This password is not valid"
                                </span>
                                : null}

                                {this.state.passwordMatchError ?
                                <span className="error-field">
                                "Password do not match"
                                </span>
                                : null}
                                <i onClick={this._toggleClick}>
                                    { !this.state.eyeIcon ? <AiFillEye /> : <AiFillEyeInvisible /> }
                                </i>
                            </div>
                            <p>
                                Password must have at least 6 characters, an uppercase and lowercase letters, a numbers or symbols.
                            </p>
                            <div className="inp-field"> 
                                <BlueButton onClick={this._handleSubmit}>Submit</BlueButton> 
                            </div>
                            <div className="inp-field"> 
                                <WhiteButton>Remind me later</WhiteButton> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const PasswordInput = styled(PasswordInputComponent)`
    .page-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container{
        .logo{
            text-align: center;
        }
     h2{
         font-size: 24px;
         line-height: 21px;
         color: #3d495a;
         text-align: center;
         font-weight: 500;
     }
        .form-wrapper{
            width: 400px;
            height: 440px;
            border-radius: 7px;
            background-color: white;
            padding: 40px;
            .inp-field{
                margin-bottom: 20px;
                button{
                    width: 100%;
                    margin-left: 0;
                }
                span{
                    color: red;
                    font-size: 12px;
                    margin-top: 10px;
                }
                i{
                    font-size: 20px;
                    color: #aaa;
                    position: absolute;
                    right: 10px;
                    top: 13px;
                }
                &.eye-relative{
                    position: relative;
                }
            }
            p{
                font-size: 11px;
                color: #9ba1a9;
                line-height: 14px;  
            }
        }   
    }
`;