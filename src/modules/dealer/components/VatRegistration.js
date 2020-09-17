import React, { Component } from 'react';
import styled from 'styled-components';
import { FieldInput } from '../../common/components/FieldInput';

class VatRegistrationComp extends Component {

    state = {
        vatNumber: "",
    };

    _handleVatNumber = (e) => {
        const vatNumber = e.target.value;
        this.setValue({
            vatNumber
        })
    }


    render() {
        return(
            <div className={this.props.className}>
                <div className="title-wrap">
                    <h3>VAT Registration</h3>
                </div>
                <div className="mt-20">
                    <div className="form-wrap">
                        <div className="inp-field">
                            <label for="vatNumber">VAT Number (*)</label>
                            <FieldInput 
                                onChange={this.state._handleVatNumber} 
                                type="vatNumber"
                                id="fname" 
                                placeholder="Not Applicable" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const VatRegistration = styled(VatRegistrationComp)``;