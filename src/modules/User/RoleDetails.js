import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { LeftPanel } from '../common/components/LeftPanel';
import { Header } from '../common/components/Header';
import { FieldSelect } from '../common/components/FieldSelect';
import { WhiteButton, BlueButton } from '../common/components/Button.page';
import { AccordionWithChildren } from '../common/components/AccordionWithChildren';

class RoleDetailsComponent extends Component {

    roleTitle = [
        { value: 'Finance Manager', label: 'Finance Manager' },
        { value: 'Accountant', label: 'Accountant' },
    ];

    selectCompany = [
        { value: 'Axiom', label: 'Axiom' },
        { value: 'Lexx Digital', label: 'Lexx Digital' },
    ];

    rolePermission = [
        { value: 'Finance, Dealers, Supplier (3 more)', label: 'Finance, Dealers, Supplier (3 more)' },
    ];


    state = {
        roleTitle: "",
        selectCompany: "",
        rolePermission: "",
        roleResponsibilityRead1: "",
        roleResponsibilityRead2: "",
        roleResponsibilityRead3: "",
        roleResponsibilityRead4: "",
        roleResponsibilityRead5: "",
        roleResponsibilityWrite1: "",
        roleResponsibilityWrite2: "",
        roleResponsibilityWrite3: "",
        roleResponsibilityWrite4: "",
        roleResponsibilityWrite5: "",
    };


    _handleRoleTitle = (option) => {
        this.setState({
            roleTitle: option
        })
    }

    _handleSelectCompany = (option) => {
        this.setState({
            selectCompany: option
        })
    }

    _handleRolePermission = (option) => {
        this.setState({
            rolePermission: option
        })
    }

    _handleRoleResponsibilityRead1 = (e) => {
        const RoleResponsibilityRead1 = e.target.value;
        this.setState({
            RoleResponsibilityRead1: RoleResponsibilityRead1
        })
    }

    _handleRoleResponsibilityRead2 = (e) => {
        const roleResponsibilityRead2 = e.target.value;
        this.setState({
            roleResponsibilityRead2: roleResponsibilityRead2
        })
    }

    _handleRoleResponsibilityRead3 = (e) => {
        const roleResponsibilityRead3 = e.target.value;
        this.setState({
            roleResponsibilityRead3: roleResponsibilityRead3
        })
    }

    _handleRoleResponsibilityRead4 = (e) => {
        const roleResponsibilityRead4 = e.target.value;
        this.setState({
            roleResponsibilityRead4: roleResponsibilityRead4
        })
    }

    _handleRoleResponsibilityRead5 = (e) => {
        const roleResponsibilityRead5 = e.target.value;
        this.setState({
            roleResponsibilityRead5: roleResponsibilityRead5
        })
    }

    _handleRoleResponsibilityWrite1 = (e) => {
        const roleResponsibilityWrite1 = e.target.value;
        this.setState({
            roleResponsibilityWrite1: roleResponsibilityWrite1
        })
    }

    _handleRoleResponsibilityWrite2 = (e) => {
        const roleResponsibilityWrite2 = e.target.value;
        this.setState({
            roleResponsibilityWrite2: roleResponsibilityWrite2
        })
    }

    _handleRoleResponsibilityWrite3 = (e) => {
        const roleResponsibilityWrite3 = e.target.value;
        this.setState({
            roleResponsibilityWrite3: roleResponsibilityWrite3
        })
    }

    _handleRoleResponsibilityWrite4 = (e) => {
        const roleResponsibilityWrite4 = e.target.value;
        this.setState({
            roleResponsibilityWrite4: roleResponsibilityWrite4
        })
    }

    _handleRoleResponsibilityWrite5 = (e) => {
        const roleResponsibilityWrite5 = e.target.value;
        this.setState({
            roleResponsibilityWrite5: roleResponsibilityWrite5
        })
    }


    render() {
        console.log(this.state)
        return(
            <div className={this.props.className}>
                <LeftPanel />
                <Header />
                <div className="main-wrapper">
                    <div className="role-details-wrap">
                        <h1>Role Details</h1>
                        <p>You can only view / edit of role details</p>
                        <div className="inner-container">
                            <div className="inp-field">
                                <label for="roleTitle">ROLE TITLE</label>
                                <FieldSelect 
                                    onChange={this._handleRoleTitle}
                                    options={this.roleTitle}
                                    placeholder="Finance Manager"
                                />
                            </div>
                            <div className="inp-field">
                                <label for="selectCompany">SELECT COMPANY</label>
                                <FieldSelect 
                                    onChange={this._handleSelectCompany}
                                    options={this.selectCompany}
                                    placeholder="Axiom"
                                />
                            </div>
                            <div className="inp-field" style={{marginBottom: 30}}>
                                <label for="rolePermissions">ROLE PERMISSIONS(S)</label>
                                <FieldSelect 
                                    onChange={this._handleRolePermission}
                                    options={this.rolePermission}
                                    placeholder="Finance, Dealers, Supplier (3 more)"
                                />
                            </div>
                        </div>
                        <div className="outer-container">
                            <h5>Role Responsibility(s)</h5>
                            <AccordionWithChildren
                                title="Dealers"
                            >
                                <>
                                    <div className="description-content">
                                        <div className="role-field">
                                            <div className="content">Role Responsibility 1</div>
                                            <div className="check-boxes">
                                                <div className="form-group">
                                                    <input type="checkbox" id="read1" 
                                                        onChange={this._handleRoleResponsibilityRead1}
                                                    />
                                                    <label for="read1">Read</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="write1" 
                                                        onChange={this._handleRoleResponsibilityWrite1}
                                                    />
                                                    <label for="write1">Write</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="role-field">
                                            <div className="content">Role Responsibility 2</div>
                                            <div className="check-boxes">
                                                <div className="form-group">
                                                    <input type="checkbox" id="read2" 
                                                        onChange={this._handleRoleResponsibilityRead2}
                                                    />
                                                    <label for="read2">Read</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="write2" 
                                                        onChange={this._handleRoleResponsibilityWrite2}
                                                    />
                                                    <label for="write2">Write</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="role-field">
                                            <div className="content">Role Responsibility 3</div>
                                            <div className="check-boxes">
                                                <div className="form-group">
                                                    <input type="checkbox" id="read3" 
                                                        onChange={this._handleRoleResponsibilityRead3}
                                                    />
                                                    <label for="read3">Read</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="write3" 
                                                        onChange={this._handleRoleResponsibilityWrite3}
                                                    />
                                                    <label for="write3">Write</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="role-field">
                                            <div className="content">Role Responsibility 4</div>
                                            <div className="check-boxes">
                                                <div className="form-group">
                                                    <input type="checkbox" id="read4" 
                                                        onChange={this._handleRoleResponsibilityRead4}
                                                    />
                                                    <label for="read4">Read</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="write4" 
                                                        onChange={this._handleRoleResponsibilityWrite4}
                                                    />
                                                    <label for="write4">Write</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="role-field">
                                            <div className="content">Role Responsibility 5</div>
                                            <div className="check-boxes">
                                                <div className="form-group">
                                                    <input type="checkbox" id="read5" 
                                                        onChange={this._handleRoleResponsibilityRead5}
                                                    />
                                                    <label for="read5">Read</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="checkbox" id="write5" 
                                                        onChange={this._handleRoleResponsibilityWrite5}
                                                    />
                                                    <label for="write5">Write</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </AccordionWithChildren>

                            <AccordionWithChildren
                                title="Onboarding"
                            >
                                <>
                                    <div className="description-content">
                                        <div className="role-field">
                                            Onboarding
                                        </div>
                                    </div>
                                </>
                            </AccordionWithChildren>

                            <AccordionWithChildren
                                title="Finance"
                            >
                                <>
                                    <div className="description-content">
                                        <div className="role-field">
                                            Finance
                                        </div>
                                    </div>
                                </>
                            </AccordionWithChildren>
                            
                        </div>
                        <div className="btn-wrap">
                            <BlueButton>Save Changes</BlueButton>
                            <WhiteButton>Cancel</WhiteButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const RoleDetails = styled(RoleDetailsComponent)`
    .main-wrapper{
        background-color: #f3f3f4;
        padding: 24px;
        width: 85%;
        float: left;
    }
    .role-details-wrap{
        background-color: white;
        padding: 20px;
        box-shadow: 0 2px 2px 0 rgba(16, 19, 21, 0.1);
        h1{
            font-size: 24px;
            font-weight: 500;
            color: #3d495a;
        }
        p{
            color: #9ba1a9;
            font-size: 12px;
        }
        .btn-wrap{
            margin-top: 35px;
            button{
                margin-left: 0;
                margin-right: 10px;
                margin-top: 0;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
    .inner-container{
        width: 300px;
        label{
            font-size: 10px;
            font-weight: 500;
            color: #9ba1a9;
            margin-bottom: 5px;
            display: inline-block;
        }
        .inp-field{
            margin-bottom: 20px;
        }
    }
    .outer-container{
        border-top: 1px solid #f3f3f4;
        label{
            font-size: 10px;
            font-weight: 500;
            color: #9ba1a9;
        }
        .inp-field{
            margin-bottom: 20px;
        }
        h5{
            font-size: 12px;
            color: #0e1d32;
            font-weight: 300;
            margin-bottom: 5px;
        }
    }
    .description-content{
        padding: 15px;
        border: 1px solid #cacdd1;
        border-top: 0;
        border-radius: 0 0 5px 5px; 
        transition: all 0.5s;
        .role-field{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            .content{
                font-size: 14px;
                color: #6c7582;
            }
            .check-boxes{
                display: flex;
                align-items: center;
            }
            &:last-child{
                border: 0;
            }
        }
    }



    .form-group input {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
    }

    .form-group label {
        position: relative;
        cursor: pointer;
    }

    .form-group label:before {
        content:'';
        -webkit-appearance: none;
        background-color: transparent;
        border: 2px solid #0079bf;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        padding: 10px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
        border-radius: 3px;
    }

    .form-group input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 9px;
        width: 6px;
        height: 14px;
        border: solid #0079bf;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    .form-group {
        display: block;
        margin-bottom: 15px;
        margin-right: 40px;
        &:nth-child(2){
            margin-right: 0;
        }
    }
        
    .form-group input {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
    }
    
    .form-group label {
        position: relative;
        cursor: pointer;
    }
    
    .form-group label:before {
        content:'';
        -webkit-appearance: none;
        background-color: #50ba69;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        padding: 6px;
        display: inline-block;
        border: 2px solid #50ba69;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 7px;
        background: #f35429;
    }
    
    .form-group input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 6px;
        width: 3px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    /* &:checked + label:before {
        background: #f35429;
      } */
`;
