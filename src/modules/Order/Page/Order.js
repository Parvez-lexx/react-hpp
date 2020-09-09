import React, { Component } from 'react';
import styled from 'styled-components';
import { LeftPanel } from '../../common/components/LeftPanel';
import { Header } from '../../common/components/Header';
import { OrderCard } from '../Page/OrderCard';
import { FaSistrix } from 'react-icons/fa';
import { FieldSearch } from '../../common/components/FieldSearch';

class OrderComponent extends Component{

    state = {
        searchId: "",
        searchIdError: false
    };

    _handleSearchId = (e) => {
        if(!new RegExp(/^[a-zA-Z]*$/g).test(e.target.value)) {
            console.log("state :", e.target.value)
            this.setState({
                searchId: e.target.value,
                searchIdError: true
            })
        }
        else{
            this.setState({
                searchId: e.target.value,
                searchIdError: false
            })
        }

    }

    render(){
    console.log("state :", this.state.searchId)
        return(
            <div className={this.props.className}>
                <LeftPanel />
                <Header />
                <div className="wrapper">
                    <h1>Orders</h1>
                    <div className="content-wrapper">
                        <div className="card-wrapper">
                            <OrderCard label="Pending" value="50" />
                            <OrderCard label="In Process" value="100" />
                            <OrderCard label="Completed" value="250" />
                            <OrderCard label="Total" value="400" />
                        </div>
                        <div className="search-wrap">
                            <FieldSearch 
                                onChange={this._handleSearchId}
                                isError={this.state.searchIdError}
                                type="search" 
                                placeholder="Search by order ID" 
                            />
                            <i> <FaSistrix /> </i>
                            {this.state.searchIdError ?
                                <span className="error-field">
                                    "This ID type is not valid"
                                </span>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const Order = styled(OrderComponent)`
    .wrapper{
        background-color: #f3f3f4;
        padding: 24px;
        width: 85%;
        float: left;
        h1{
            font-size: 24px;
            font-weight: 500;
            color: #3d495a;
        }
    }
    .content-wrapper{
        background-color: white;
        box-shadow: 0 2px 0 0 #edeeef;
        padding: 32px;
        height: 100vh;
        .card-wrapper{
            display: flex;
        }
    }
`;
