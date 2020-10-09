import React, {Component} from 'react';
import styled from 'styled-components';
import { WhiteButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { FieldSelect } from '../../common/components/FieldSelect';

class PersonalInfoComp extends Component {

    country = [
        { value: 'UAE', label: 'UAE' },
        { value: 'KSA', label: 'KSA' },
    ];

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        isClicked: false,
        isClickedOpen: false,
    };

    _handleFirstName = (e) => {
        const firstName = e.target.value;
        this.setState({
            firstName
        })
     }
    
     _handleLastName = (e) => {
        const lastName = e.target.value;
        this.setState({
            lastName
        })
     }

     _handleEmail = (e) => {
        const email = e.target.value;
        this.setState({
            email
        })
     }
    
     _handlePhone = (e) => {
        const phone = e.target.value;
        this.setState({
            phone
        })
     }

     _handleChangeCountry = country => {
        this.setState(
          { country }
        );
     };

    render() {
        return(
            <div className={this.props.className}>
                <div className="title-wrap">
                    <h3>Personal Information</h3>
                    <WhiteButton>Pending Request</WhiteButton>
                </div>
                <div className="mt-20">
                    <div className="form-wrap">
                        <div className="inp-field">
                            <label for="fname">FIRST NAME</label>
                            <FieldInput 
                                onChange={this._handleFirstName} 
                                type="text"
                                id="fname" 
                                placeholder="Harris" 
                            />
                        </div>
                        <div className="inp-field">
                            <label for="lname">LAST NAME</label>
                            <FieldInput 
                                onChange={this._handleLastName}
                                type="text"
                                id="lname" 
                                placeholder="Anderson" 
                            />
                        </div>
                    </div>
                    <div className="form-wrap">
                        <div className="inp-field">
                            <label for="email">EMAIL ADDRESS</label>
                            <FieldInput 
                                onChange={this._handleEmail} 
                                type="email"
                                id="email" 
                                placeholder="allen.anderson@company.com" 
                            />
                        </div>
                        <div className="inp-field">
                            <label for="phone">PHONE NUMBER</label>
                            <FieldInput 
                                onChange={this._handlePhone}
                                type="number"
                                id="phone" 
                                placeholder="+971559988741" 
                            />
                        </div>
                    </div>
                    <div className="form-wrap">
                        <div className="inp-field">
                            <label for="country">COUNTRY</label>
                            <FieldSelect 
                                onChange={this.handleChangeCountry}
                                options={this.country}
                                placeholder="Select country"
                            />
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export const PersonalInfo = styled(PersonalInfoComp)``;
