import React, { Component } from 'react';
import styled from 'styled-components';
import { WhiteButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { Textarea } from '../../common/components/Textarea';

class StoreInfoComp extends Component {

    state = {
        businessName: "",
        regionCity: "",
        regionCity1: "",
        area: "",
        disabled: true,
        isClicked: false,
        isClickedOpen: false,
    };

    _handleBusinessName = (e) => {
        const businessName = e.target.value;
        this.setState({
            businessName
        })
    }

    _handleRegionCity = (e) => {
        const regionCity = e.target.value;
        this.setState({
            regionCity
        })
    }

    _handleRegionCity1 = (e) => {
        const regionCity1 = e.target.value;
        this.setState({
            regionCity1
        })
    }

    _handleArea = (e) => {
        const area = e.target.value;
        this.setState({
            area
        })
    }

    _handleAddress =()=> {
        this.setState( {disabled: false} )
    }


    render() {
        return(
            <div className={this.props.className}>
                <div className="">
                    <div className="store-information">
                        <h3>Store Information</h3>
                        <div className="form-wrap">
                            <div className="inp-field" style={{width: '100%'}}>
                                <label for="bussiname">BUSINESS NAME</label>
                                <FieldInput 
                                    onChange={this.state._handleBusinessName} 
                                    type="text"
                                    id="bussiname" 
                                    placeholder="Hotline Mobile Phone LLC" 
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field">
                                <label for="regionCity">REGION/CITY</label>
                                <FieldInput 
                                    onChange={this.state._handleRegionCity} 
                                    type="text"
                                    id="regionCity" 
                                    placeholder="Dubai" 
                                    disabled = {this.state.disabled}
                                />
                            </div>
                            <div className="inp-field">
                                <label for="area">AREA</label>
                                <FieldInput 
                                    onChange={this.state._handleArea}
                                    type="text"
                                    id="area" 
                                    placeholder="Satwa" 
                                    disabled = {this.state.disabled}
                                />
                            </div>
                        </div>
                        <div className="form-wrap">
                            <div className="inp-field" style={{flex: 1}}>
                                <label for="regionCity1">REGION/CITY</label>
                                <Textarea 
                                    style={{width: '100%', resize: 'none'}}
                                    onChange={this.state._handleRegionCity1} 
                                    id="regionCity1" 
                                    placeholder="Hotline Shop 18, Al Satwa Road ,Opposite Al Satwa Bus Station, Al Satwa - Dubai Phone LLC"
                                    disabled = {this.state.disabled}
                                />
                            </div>
                        </div>
                    <div className="change-button">
                        <WhiteButton 
                            onClick = {this._handleAddress} 
                            > Change Address
                        </WhiteButton>
                    </div>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export const StoreInfo = styled(StoreInfoComp)``;