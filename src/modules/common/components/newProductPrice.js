import React, { Component } from 'react';
import styled from 'styled-components';
import { FieldSelect } from './FieldSelect';
import { FieldInput } from './FieldInput';
import  { FieldSearch } from '../../common/components/FieldSearch';
import { DatePickerComp } from './DatePicker';
import { TimePicker } from './TimePicker';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from './Button.page';

class NewProductPriceComponent extends Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };


    render() {
        return(
            <div className={this.props.className}>
                <div className="popup-wrapper">
                    <div className="popup-container">
                        <div className="header">
                            <p> {this.props.title} </p>
                        </div>
                        <div className="body-content">
                            <div className="field-wrapper">
                                <div className="field-box">
                                    <label for="selectType">SELECT TYPE</label>
                                    <FieldSelect 
                                        onChange={this.props.onChange}
                                        options={this.props.selectType}
                                        placeholder="Variant Level"
                                    />
                                </div>
                                <div className="field-box">
                                    <label for="searchProduct">SEARCH PRODUCT</label>
                                    <FieldSearch 
                                        placeholder="AXMMOHUA51095PHW"
                                    />
                                </div>
                            </div>

                            <div className="field-wrapper">
                                <div className="field-box">
                                    <label for="productName">PRODUCT NAME</label>
                                    <FieldInput 
                                        placeholder="Huawei Y6 Prime 256GB Black"
                                    />
                                </div>
                            </div>

                            <div className="field-wrapper" style={{width: '50%', marginBottom: 10}}>
                                <div className="field-box">
                                    <label for="quantity">QUANTITY</label>
                                    <FieldInput 
                                        placeholder="1+"
                                    />
                                    <FieldInput 
                                        placeholder="5+"
                                    />
                                    <FieldInput 
                                        placeholder="11+"
                                    />
                                </div>
                                <div className="field-box">
                                    <label for="price">PRICE(AED)</label>
                                    <FieldInput 
                                        placeholder="400"
                                    />
                                    <FieldInput 
                                        placeholder="480"
                                    />
                                    <FieldInput 
                                        placeholder="460"
                                    />
                                </div>
                            </div>
                            <Link>
                                <span>
                                    <i><AiOutlinePlusCircle /></i>
                                    New Slab Price
                                </span>
                            </Link>

                            <div className="field-wrapper" style={{marginTop: 30}}>
                                <div className="field-box">
                                    <label for="productName">START DATE/TIME</label>
                                    <DatePickerComp
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                    />
                                    {/* <DatePicker 
                                        placeholder="Aug 3, 2020"
                                    /> */}
                                </div>
                            </div>

                        </div>
                        <div className="footer">
                            <WhiteButton>Cancel</WhiteButton>
                            <BlueButton>Submit</BlueButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const NewProductPrice = styled(NewProductPriceComponent)`
    .popup-wrapper{
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }
    .popup-container{
        background-color: white;
        position: absolute;
        width: 644px;
        height: 632px;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.1);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 20px;
    }
    .header{
        p{
            text-align: center;
            color: #333;
            font-size: 17px;
            font-weight: 500;
        }
    }
    .body-content{
        a{
            text-decoration: none;
        }
        span{
            color: #6c7582;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            i{
                margin-right: 5px;
                font-size: 18px;
            }
        }
    }
    .field-wrapper{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .field-box{
            flex: 1;
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }
            label{
                font-size: 11px;
                color: #6c7582;
                font-weight: 500;
                margin-bottom: 5px;
                display: inline-block;
            }
        }
    }
    .footer{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`;
