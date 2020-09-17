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
        { value: 'Pending', label: 'Pending' },
        { value: 'Rejected', label: 'Rejected' },
    ];

    state = {
        isClicked: false,
        isClickedOpen: false,
        licenceNumber: "",
        tradeStatus: "",
        reason: '',
        startDate: new Date(),
        disabled: true
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

    _handleTradeStatus = tradeList => {
        this.setState(
            { tradeList }
        )
    }

    _handleReason = (e) => {
        const reason= e.target.value;
        this.setState({
            reason
        })
    }

    render() {
        return(
            <div className={this.props.className}>
                <div className="emirates-verification">
                    <h3>Trade Licence Verification</h3>
                    <h5>LICENCE ERTIFICATION</h5>
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
                                    onChange={this._handleLicenceNumber} 
                                    type="text"
                                    id="licenceNumber" 
                                    placeholder="12345678" 
                                />
                            </div>
                            <div className="inp-field">
                                <label for="licenceExpiry">License Expiry Date (*)</label>
                                <DatePickerComp
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field">
                                <label for="tradeStatus">STATUS</label>
                                <FieldSelect 
                                    id="tradeStatus"
                                    onChange={this.handleTradeStatus}
                                    options={this.state.tradeList}
                                    placeholder="Approved"
                                />
                            </div>
                            <div className="inp-field">
                                <label for="reason">REASON</label>
                                <FieldInput
                                    placeholder= "Rejectionreason"
                                    onChange={this._handleReason}
                                    type="text"
                                    id="reason" 
                                    disabled = {this.state.disabled}
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
