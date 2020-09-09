import React, { Component } from 'react';
import styled from 'styled-components';
import { LeftPanel } from '../../common/components/LeftPanel';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import {FieldInput} from "../../common/components/FieldInput";
import { FieldSelect } from '../../common/components/FieldSelect'; 
import {WhiteButton, BlueButton} from '../../common/components/Button.page';
import { Header } from '../../common/components/Header';


class CreateUserComponent extends Component{

    roles = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    locations = [
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Noida', label: 'Noida' },
        { value: 'Gurgaon', label: 'Gurgaon' },
    ];

    state = {
        name: "",
        email: "",
        userRole: "",
        location: "",
        nameError: false,
        emailError: false,
        userRoleError: false,
        locationError: false,
        selectedOption: null,
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

    _userRole = (e) => {
        const userRole = e.target.value;
        this.setState({
            userRole: userRole
        })
    }

    _location = (e) => {
        const location = e.target.value;
        this.setState({
            location: location
        })
    }

    _handleSubmit = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
         console.log(this)
         this.props.history.push("/user")
         console.log(response);
       })
    }

    handleChangeRoles = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    handleChangeLocation = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        return(
            <div className={this.props.className}>
                <LeftPanel />
                <div className="main-container">
                    <Header />
                    <div className="content-wrapper">
                        <div className="user-links">
                            <ul>
                                <li>
                                    <Link to="/"><FaHome /></Link>
                                </li>
                                <li>
                                    <Link to="/"> <span>/</span> HYKE USERS</Link>
                                </li>
                                <li>
                                    <Link to="/"> <span>/</span> CREATE A USER</Link>
                                </li>
                            </ul>
                        </div>
                        <h1>Create a user</h1>
                        <div className="form-container">
                            <div className="inner-container">
                                <h3>Please enter the details</h3>
                                <div className="inp-field">
                                    <label for="name">FULL NAME</label>
                                    <FieldInput onChange={this._handleName} placeholder="Enter Name" isError={this.state.nameError} id="name" />
                                    {this.state.nameError ?
                                    <span className="error-field">
                                    "This name format is not valid"
                                    </span>
                                    : null}
                                </div>
                                <div className="inp-field">
                                    <label for="name">EMAIL ADDRESS</label>
                                    <FieldInput onChange={this._handleEmail} placeholder="Enter email official address" isError={this.state.emailError} id="name" />
                                    {this.state.emailError ?
                                    <span className="error-field">
                                    "This email format is not valid"
                                    </span>
                                    : null}
                                </div>
                                <div className="inp-field">
                                    <label for="user-name">USER ROLE</label>
                                    <FieldSelect  
                                        options={this.roles}
                                        placeholder="Select roles"
                                        onChange={this.onChangeRoles} 
                                    />
                                </div>
                                <div className="inp-field">
                                    <label for="user-name">LOCATION</label>
                                    <FieldSelect 
                                        options={this.locations}
                                        placeholder="Select location"
                                        onChange={this.onChangeLocations}>
                                    </FieldSelect>
                                </div>
                                <div className="button-wrap">
                                    <WhiteButton disabled={!this.state.email || !this.state.name || this.state.emailError || this.state.nameError || this.state.location || this.state.userRole} onClick={this._handleSubmit}>Cancel</WhiteButton>
                                    
                                    <BlueButton disabled={!this.state.email || !this.state.name || this.state.emailError || this.state.nameError || this.state.location || this.state.userRole } onClick={this._handleSubmit}>Submit</BlueButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const CreateUser = styled(CreateUserComponent)`
    .main-container{
        width: 85%;
        float: left;
    }
    .content-wrapper{
        padding: 24px 24px 0;
        height: 100vh;
        h1{
            font-size: 20px;
            width: 100%;
            float: left;
            color: #3d495a;
            font-weight: 500;
        }
    }
    .user-links{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                &:first-child a{
                    padding-left: 0;
                }
                a{
                    text-decoration: none;
                    color: #ccc;
                    font-size: 12px;
                    float: left;
                    span{
                        margin: 0 10px;
                        display: inline-block;
                    }
                }
            }
        }
    }
    .form-container{
        background-color: white;
        width: 100%;
        float: left;
        padding: 20px;
    }
    .inner-container{
        width: 300px;
        h3{
            font-size: 12px;
            color: #3d495a;
            margin-bottom: 30px;
        }
        .inp-field{
            margin-bottom: 20px;
        }
        .button-wrap{
            display: flex;
            justify-content: space-between;
        }
    }
`; 

