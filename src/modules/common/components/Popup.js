import React from 'react';
import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { WhiteButton, BlueButton } from '../components/Button.page';

function PopupComponent(props) {
    return(
        <div className={props.className}>
            <div className="popup-wrapper">
                <div className="popup-container">
                    <div className="header">
                        <p> <FaRegWindowClose onClick={props.handleClickClose} /> </p>
                    </div>
                    <div className="body-content">
                        <h2> {props.title} </h2>
                        <p> {props.description} </p>
                        <div>
                            <WhiteButton> {props.noButton} </WhiteButton>
                            <BlueButton> {props.yesButton} </BlueButton>
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        </div>
    );
}

export const Popup = styled(PopupComponent)`
    .popup-wrapper{
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .popup-container{
        background-color: white;
        border-radius: 10px;
        width: 400px;
        height: 400px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;  
    }
    .header{
        padding: 5px 5px 0 0;
        p{
            margin: 0;
            text-align: right;
        }
    }
    .body-content{
        padding: 20px;
        text-align: center;
        h2{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
    }
    .footer{
        padding: 20px;
    }
`;
