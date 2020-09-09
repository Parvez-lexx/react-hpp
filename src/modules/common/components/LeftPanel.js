import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/svg/hyke-icon.svg';
import { FaBeer } from 'react-icons/fa';
import { BsPerson, BsGrid } from 'react-icons/bs';


class LeftPanelComponent extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <div className="wrapper-main">
                    <div className="logo">
                        <Link to="/">
                            <Logo style={{width: 30}} /> 
                            <span>HYKE</span>
                        </Link>
                    </div>
                    <div className="navigation-container">
                        <ul>
                            <li className="active">
                                <Link>
                                    <span><BsGrid /></span>Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaBeer /></span>Content Management
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaBeer /></span>Onboard Requests
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><BsPerson /></span>HYKE Users
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><BsPerson /></span>Finance
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaBeer /></span>Stock Management
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaBeer /></span>Dealers
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaBeer /></span>Reports
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export const LeftPanel = styled(LeftPanelComponent)`
    .wrapper-main{
        background-color: #0d1d32;
        width: 15%;
        height: 100vh;
        float: left;
    }
    .logo{
        border-bottom: 1px solid #1b2a3d;
        a{
            text-decoration: none;
            font-size: 30px;
            font-weight: 500;
            letter-spacing: 7px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                margin-left: 10px;
                letter-spacing: 5px;
                font-size: 16px;
            }
        }
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 30px;
        li{
            padding: 1em;
            cursor: pointer;
            a{
                text-decoration: none;
                color: #777;
                font-size: 13px;
                span{
                    margin-right: 15px;
                }
            }
            &.active{
                color: white;
            }
            &:hover{
                color: white;
                background-color: #313e50;
                border-bottom: 1px solid #56606d;
                border-left: 4px solid #44b763;
                transition: all 0.3s;
                width: cal(100%-4px);
                a{
                    color: white;
                    span{
                        color: #44b763;
                    }
                }
            }
        }
    }
`; 

// #2ebcb9