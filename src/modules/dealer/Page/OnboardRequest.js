import React, { Component } from 'react';
import styled from 'styled-components';
import { LeftPanel } from '../../common/components/LeftPanel';
import { Header } from '../../common/components/Header';
import { Link } from 'react-router-dom';
import { PersonalInfo } from '../components/PersonalInformation';
import { StoreInfo } from '../components/StoreInformation';
import { IdVerification } from '../components/IdVerification';
import { LicenceVerification } from '../components/LicenceVerification';
import { VatRegistration } from '../components/VatRegistration';
import { RedButton } from '../../common/components/Button.page';
import { WhiteButton } from '../../common/components/Button.page';
import { BlueButton } from '../../common/components/Button.page';

class DealerOnboardRequestComponent extends Component {

    state = {
        approveRequest: {},
        rejectRequest: {},
    };

    _handleIdStatus = (approveRequest) => {
            this.setState({
                approveRequest
            });
    } 

    _handleTradeStatus = (rejectRequest) => {
            this.setState({
                rejectRequest
            });
        
    } 


    render() {
        return(
            <div className={this.props.className}>
                <LeftPanel />
                <Header />
                <div className="wrapper">
                    <h1>Dealer Onboarding Request</h1>
                    <div className="content-wrapper">
                        <PersonalInfo />
                        <StoreInfo />
                        <IdVerification 
                            hanldeStatusChange={this._handleIdStatus}
                        />
                        <LicenceVerification 
                            hanldeStatusChange={this._handleTradeStatus}
                        />
                        <VatRegistration />
                    </div>
                    <div className="buttons-wrap">
                        <div className="btn-wrap">
                            <WhiteButton> Go Back </WhiteButton>
                        </div>
                        <div className="btn-wrap">
                            <RedButton 
                                disabled= {!(this.state.approveRequest.value === "Rejected" || this.state.rejectRequest.value === "Rejected")}
                            >   Reject Request 
                            </RedButton>
                            <WhiteButton 
                                disabled = {!(this.state.approveRequest.value === "Rejected" || this.state.rejectRequest.value === "Rejected")}
                                style={{marginLeft: 15}}> Request Re-upload 
                            </WhiteButton>
                            <BlueButton 
                                onClick={this._handleApproveRequest}
                                disabled={!(this.state.approveRequest.value === "Approved" && this.state.rejectRequest.value === "Approved")}
                                > Approve Request 
                            </BlueButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export const OnboardRequest = styled(DealerOnboardRequestComponent)`
    .wrapper{
        background-color: #f3f3f4;
        padding: 24px;
        width: 85%;
        float: left;
        // position: absolute;
        // left: 203px;
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
        // height: 100vh;
        .title-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                color: #3d495a;
                font-size: 17px;
                font-weight: 500;
                margin: 0;
            }
            button{
                color: #6c7582;
                font-size: 12px;
                font-weight: 500;
                margin-top: 0;
            }
        }
        .mt-20{
            margin-top: 20px;
        }
    }
    .form-wrap{
        display: flex;
        justify-content: space-between;
        width: 400px;
        .inp-field{
            margin-bottom: 20px;
        }
        label{
            width: 100%;
            display: inline-block;
            font-weight: 500;
            color: #6c7582;
            font-size: 13px;
            text-align: left;
        }
    }
    .line{
        border-bottom: 1px solid #edeeef;
        margin: 15px 0 25px 0;
        // box-shadow: 0 2px 0 0 #edeeef;
    }
    .store-information{
        h3{
            color: #3d495a;
            font-size: 17px;
            font-weight: 500;
            margin-bottom: 25px;
        }
    }
    .change-button{
        text-align: right;
        width: 400px
    }
    .emirates-verification{
        h3{
            color: #3d495a;
            font-size: 17px;
            font-weight: 500;
            margin-bottom: 25px;
        }
        h5{
            color: #9ba1a9;
            font-size: 11px;
            margin-bottom: 7px;
        }
        .id-section{
            width: 400px;
            .image-wrap{
                display: flex;
                justify-content: space-between;
                .image{
                    img{width: 190px; margin-bottom: 20px}
                    .icons{
                        span{
                            border: 1px solid #ccc;
                            padding: 5px 20px;
                            border-radius: 2px;
                            color: #6c7582;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
    .buttons-wrap{
        display: flex;
        justify-content: space-between;
        background-color: white;
        margin-top: 20px;
    }
    .btn-wrap{}
`;

