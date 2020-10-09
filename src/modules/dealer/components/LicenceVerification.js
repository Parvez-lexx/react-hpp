import React, { Component } from 'react';
import styled from 'styled-components';
import visa from '../../../assets/jpg/visa.jpg';
import { FaEye, FaUpload, FaDownload } from "react-icons/fa";
import { ImageExpander } from '../../common/components/ImageExpander';
import { FieldInput } from '../../common/components/FieldInput';
import { DatePickerComp } from '../../common/components/DatePicker';
import { FieldSelect } from '../../common/components/FieldSelect';

class LicenceVerificationComp extends Component {

    tradeList = [
        { value: 'Approved', label: 'Approved' },
        { value: 'Rejected', label: 'Rejected' }
    ];

    reasonList = [
        { value: 'Not Applicable', label: 'Not Applicable' },
        { value: 'Need More Documents', label: 'Need More Documents' },
    ];

    state = {
        isClicked: false,
        isClickedOpen: false,
        licenceNumber: "",
        tradeStatus: "",
        reason: '',
        startDate: new Date(),
        disabled: true,
        selectDisabled: true,
        dateDisabled: true
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    _handleImageExpander = () => {
        this.setState({
            isClicked: true
        })
    }

    _handleClose = () => {
        this.setState({
            isClicked: false
        })
    }

    _handleOpen = () => {
        this.setState({
            isClicked: true
        })
    }

    _handleLicenceNumber = (e) => {
        const licenceNumber = e.target.value;
        this.setState({
            licenceNumber
        })
    }

    _handleSplit = (e) => {
        let inputVal = e.target.value;
        inputVal = inputVal.replace(/[^\d]/g, "")
        const formatedId = inputVal.replace(/(\d{3})(\d{3})(\d{3})/, "$1/$2/$3");
        this.setState({
            licenceNumber: formatedId
        })
    }

    _handleTradeStatus = tradeList => {
        // console.log("abcd", tradeList)
        if(tradeList.value === "Approved") {
            this.setState({
                tradeList,
                dateDisabled: false  
            });
        }else {
            this.setState({
                tradeList,
                selectDisabled: false
            });
        }
        this.props.hanldeStatusChange(tradeList)
    }

    _handleReason = reason => {
        this.setState({
            reason
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className={this.props.className}>
                <div className="emirates-verification">
                    <h3>Trade Licence Verification</h3>
                    <h5>LICENCE CERTIFICATION</h5>
                    <div className="id-section">
                        <div className="image-wrap">
                            <div className="image">
                                <img src={visa} alt="Visa" />
                                    <div className="icons">
                                        <span> <FaEye
                                                onClick={this._handleImageExpander} />  
                                                {this.state.isClicked ?
                                                <ImageExpander 
                                                    headerTitle="Emirate ID Front"
                                                    imageUrl={visa}
                                                    handleClose={this._handleClose}
                                                    yesButton="Update"
                                                /> : null} 
                                            </span>
                                        <span> <FaDownload /> </span>
                                        <span> <FaUpload /> </span>
                                    </div>
                            </div>  
                        </div>
                        <div className="form-wrap" style={{marginTop: 30}}>
                            <div className="inp-field">
                                <label for="licenceNumber">LICENCE NUMBER</label>
                                <FieldInput 
                                    onBlur={this._handleSplit}
                                    onChange={this._handleLicenceNumber} 
                                    type="text"
                                    id="licenceNumber" 
                                    placeholder="12345678" 
                                    value={this.state.licenceNumber}
                                />
                            </div>
                            <div className="inp-field">
                                <label for="licenceExpiry">License Expiry Date (*)</label>
                                <DatePickerComp
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    disabled={this.state.dateDisabled}
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field">
                                <label for="tradeStatus">STATUS</label>
                                <FieldSelect 
                                    id="tradeStatus"
                                    onChange={this._handleTradeStatus}
                                    options={this.tradeList}
                                    placeholder="-- Select --"
                                />
                            </div>
                            <div className="inp-field">
                                <label for="reason">REASON</label>
                                <FieldSelect
                                    placeholder= "-- Select --"
                                    onChange={this._handleReason}
                                    isDisabled = {this.state.selectDisabled}
                                    options={this.reasonList}
                                    id="reason" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    }
} 

export const LicenceVerification = styled(LicenceVerificationComp)``;
