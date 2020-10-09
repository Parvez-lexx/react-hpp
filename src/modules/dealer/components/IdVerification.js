import React, { Component } from 'react';
import styled from 'styled-components';
import licence from '../../../assets/jpg/licence.jpg';
import { FaEye, FaUpload, FaDownload } from "react-icons/fa";
import { ImageExpander } from '../../common/components/ImageExpander';
import { ImageExpander1 } from '../../common/components/ImageExpander1';
import { WhiteButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { FieldSelect } from '../../common/components/FieldSelect';
import { DatePickerComp } from '../../common/components/DatePicker';

class IdVerificationComp extends Component {

    idList = [
        { value: 'Approved', label: 'Approved' },
        { value: 'Rejected', label: 'Rejected' },
    ];

    reasonList = [
        { value: 'Not Applicable', label: 'Not Applicable' },
        { value: 'Need More Documents', label: 'Need More Documents' },
    ];
    
    state = {
        isClicked: false,
        isClickedUpload: false,
        isClickedOpen: false,
        idNumber: "",
        idList: "",
        label: "",
        startDate: new Date(),
        disabled: true,
        selectDisabled: true,
        dateDisabled: true
    };

    _onChangeInputFile = (e) => {
        console.log("parvez Input")
    
        /* let files = e.target.files;
        console.warn("data files", files) */
    }

    _hanldeUploadClick = (e) => {
        this.setState({
            isClickedUpload: true
        })
        /* let files = e.target.files;
        console.warn("data files", files) */
    }

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

    _handleIdList = idList => {
        if(idList.value === "Approved") {
            this.setState({ 
                idList,
                dateDisabled: false
            });
        }else {
            this.setState({ 
                idList,
                selectDisabled: false
            });
        }
        this.props.hanldeStatusChange(idList)
    }

    _handleIdNumber = (e, name) => {
        const value = e.target.value;
        this.setState({
            [name]:value,
            disabled: false
        });
    }

    _handleSplit = (e) => {
        let inputVal = e.target.value;
        inputVal = inputVal.replace(/[^\d]/g, "")
        const formatedId = inputVal.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
        this.setState({
            idNumber: formatedId
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
                                                    handleClose={this._handleClose}
                                                    yesButton="Update"
                                                /> : null} 
                                        </span>
                                        <span> <FaDownload /> </span>
                                        <span> <FaUpload
                                                onClick={this._hanldeUploadClick} />  
                                                {this.state.isClickedUpload ?
                                                <ImageExpander1 
                                                    headerTitle="Emirate ID Front"
                                                    imageUrl={licence}
                                                    handleClose={this._handleClose}
                                                    yesButton="Update"
                                                    onChange={this._onChangeInputFile}
                                                /> : null}  
                                        </span>
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
                                        <span> 
                                        <FaUpload
                                            onClick={this._hanldeUploadClick} />  
                                            {this.state.isClickedUpload ?
                                            <ImageExpander1
                                                headerTitle="Emirate ID Front"
                                                imageUrl={licence}
                                                handleClose={this._handleClose}
                                                yesButton="Update"
                                                onChange={this._onChangeInputFile}
                                            /> : null} 
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div className="form-wrap" style={{marginTop: 30}}>
                            <div className="inp-field">
                                <label for="idNumber">ID NUMBER</label>
                                <FieldInput 
                                    onBlur={this._handleSplit}
                                    onChange={(e) => this._handleIdNumber(e, "idNumber")} 
                                    type="text"
                                    id="idNumber" 
                                    placeholder="784-123-456-1" 
                                    value={this.state.idNumber}
                                />
                            </div>
                            <div className="inp-field">
                                <label for="idExpiry">ID Expiry Date (*)</label>
                                <DatePickerComp
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    disabled={this.state.dateDisabled}
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field">
                                <label for="status">STATUS</label>
                                <FieldSelect 
                                    id="status"
                                    onChange={this._handleIdList}
                                    options={this.idList}
                                    placeholder="-- Select --"
                                />
                            </div>
                            <div className="inp-field">
                                <label for="reason">REASON</label>
                                <FieldSelect
                                    placeholder= "-- Select --"
                                    onChange={(e) => this._handleIdNumber(e, "label")}
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

export const IdVerification = styled(IdVerificationComp)``;