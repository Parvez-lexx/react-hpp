import React, { Component,useState } from 'react';
import styled from 'styled-components';
import {LeftPanel} from '../../../modules/common/components/LeftPanel';
import { Header } from '../../common/components/Header';
import { BlueButton } from '../../common/components/Button.page';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Table } from '../../common/components/Table.page';
import { Accordion } from '../../common/components/Accordion';
import { Link } from 'react-router-dom';
import { ToggleButton } from '../../common/components/ToggleButton';
import { Popup } from '../../common/components/Popup';
import { NewProductPrice } from '../../common/components/newProductPrice';

class UserListComponent extends Component{

    selectType = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
    ];

    state = {
        selectType: "",
        isClicked: false,
        isClickedOpen: false
    };

    _handleClickOpen = () => {
        this.setState({
            isClicked: true
        })
    }

    _handleClickClose = () => {
        this.setState({
            isClicked: false
        })
    }

    _handleNewPriceOpen = () => {
        console.log("parvez")
        this.setState({
            isClickedOpen: true
        })
    }

    render(){
        console.log("state :", this.state.isClicked)
        return(
            <div className={this.props.className}>
                <LeftPanel/>
                <div className="main-container">
                    <Header />
                    <div className="content-wrapper">
                        <div className="heading-button-wrap">
                            <h2>HYKE Users</h2>
                            <Link to="/create-user"><BlueButton>Create New User</BlueButton></Link>
                        </div>
                        <div className="table-wrapper">
                            <Tabs>
                                <TabList>
                                    <Tab>Active</Tab>
                                    <Tab>Account Blocked</Tab>
                                    <Tab>Deactivated</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>Tab 1</h2>
                                    <Table />
                                </TabPanel>
                                <TabPanel>
                                    <h2>Tab 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Tab 3</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <Accordion 
                        title="Custom Accordion 1" 
                        description="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet." 
                    />
                    <Accordion 
                        title="Custom Accordion 2" 
                        description="India is a vast country with many customs and religions yet there is unity in diversity. India is a vast country with many customs and religions yet there is unity in diversity. India is a vast country with many customs and religions yet there is unity in diversity."
                    />
                    <Accordion />
                    <div className="custom-btns">
                        <ToggleButton />
                        <div>
                            <BlueButton onClick={this._handleClickOpen}>Popup</BlueButton>
                        </div>
                        {this.state.isClicked ?
                        <Popup 
                            handleClickClose={this._handleClickClose} 
                            title="Do you want to cancel?" 
                            description="Changes made to the form will be lost if you cancel." noButton="No, Keep working" 
                            yesButton="Yes, Please" 
                        /> : null}
                    </div>
                    <div>
                        <BlueButton onClick={this._handleNewPriceOpen}>New Product Price</BlueButton>
                    </div>
                    {this.state.isClickedOpen ? 
                    <NewProductPrice 
                        title="New Product Price"
                    />
                    : null}
                </div>
            </div>
        );
    }
}

export const UserList = styled(UserListComponent)`
    .main-container{
        width: 85%;
        float: left;
    }
    .content-wrapper{
        padding: 20px 20px 0;
        // height: 100vh;
    }
    .heading-button-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-size: 20px;
            color: #3d495a;
            font-weight: 500
        }
    }
    .table-wrapper{
        background-color: white;
        box-shadow: 0 2px 2px 0 rgba(16, 19, 21, 0.1);
        margin-top: 20px;
    }
    .react-tabs{
        .react-tabs__tab-list{
            border-bottom: none;
            color: #999;
            font-size: 14px;
            .react-tabs__tab{
                border-left: 1px solid #e6e6e6;
                border-right: 1px solid #e6e6e6;
                border-top: 1px solid #e6e6e6;
                background-color: #f7f7f7;
                padding: 10px 25px;
                bottom: 0;
            }
            .react-tabs__tab--selected{
                border-radius: 0;
                border: 0;
                color: #2dbdbd;
                background-color: #fff;
                border-top: 2px solid #2dbdbd;
            }
        }
        .react-tabs__tab-panel--selected{
            padding: 20px 20px;
            h2{
                margin: 0px;
            }
        }
    }
    .custom-btns{
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
    }
`;