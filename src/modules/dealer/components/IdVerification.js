import React, { Component } from 'react';
import styled from 'styled-components';
import licence from '../../../assets/jpg/licence.jpg';
import { FaEye, FaUpload, FaDownload } from "react-icons/fa";
import { ImageExpander } from '../../common/components/ImageExpander';
import { WhiteButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { FieldSelect } from '../../common/components/FieldSelect';
import { DatePickerComp } from '../../common/components/DatePicker';

class IdVerificationComp extends Component {

    idList = [
        { value: 'Resident', label: 'Resident' },
        { value: 'work-Permit', label: 'work-Permit' },
    ];
    
    state = {
        isClicked: false,
        isClickedOpen: false,
        idNumber: "",
        idList: "",
        label: "",
        startDate: new Date(),
        disabled: true
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    _handleImageExpander = () => {
        console.log("parvez")
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

    _handleIdList = idList => {
        this.setState(
            { idList }
        )
    }

    _handleIdNumber = (e) => {
        const idNumber = e.target.value;
        this.setState({
            idNumber
        })
    }

    _handleLabel = (e) => {
        const label= e.target.value;
        this.setState({
            label
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className={this.props.className}>
                <div className="emirates-verification">
                    <h3>Emirates ID Verification</h3>
                    <h5>Emirates ID Front</h5>
                    <div className="id-section">
                        <div className="image-wrap">
                            <div className="image">
                                <img src={licence} alt="licence" />
                                    <div className="icons">
                                        <span> <FaEye
                                                onClick={this._handleImageExpander} />  
                                                {this.state.isClicked ?
                                                <ImageExpander 
                                                    headerTitle="Emirate ID Front"
                                                    imageUrl={licence}
                                                    handleClose={this.state._handleClose}
                                                    yesButton="Update"
                                                /> : null} 
                                            </span>
                                        <span> <FaDownload /> </span>
                                        <span> <FaUpload /> </span>
                                    </div>
                            </div>
                            <div className="image">
                                <img src={licence} alt="Logo" />
                                    <div className="icons">
                                        <span>
                                            <FaEye 
                                                onClick={this._handleImageExpander} 
                                            />
                                            {this.state.isClicked ?
                                            <ImageExpander 
                                                headerTitle="Emirate ID Front"
                                                imageUrl={licence}
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
                                <label for="idNumber">ID NUMBER</label>
                                <FieldInput 
                                    onChange={this.state._handleIdNumber} 
                                    type="text"
                                    id="idNumber" 
                                    placeholder="784-123-456-1" 
                                />
                            </div>
                            <div className="inp-field">
                                <label for="idExpiry">ID Expiry Date (*)</label>
                                <DatePickerComp
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field">
                                <label for="status">STATUS</label>
                                <FieldSelect 
                                    id="status"
                                    onChange={this.state.handleIdList}
                                    options={this.state.idList}
                                    placeholder="Select Emirates ID status"
                                />
                            </div>
                            <div className="inp-field">
                                <label for="label">LABEL</label>
                                <FieldInput
                                    placeholder= "Rejectionreason"
                                    onChange={this._handleLabel}
                                    type="text"
                                    id="label" 
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

export const IdVerification = styled(IdVerificationComp)``;