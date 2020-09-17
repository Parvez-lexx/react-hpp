import React from 'react';
import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { WhiteButton, BlueButton } from '../components/Button.page';

function ImageExpanderComponent(props) {
    return(
        <div className={props.className}>
            <div className="popup-wrapper">
                <div className="popup-container">
                    <div className="header">
                        <p> {props.headerTitle} 
                            <FaRegWindowClose onClick={props.handleClose} /> 
                        </p>
                    </div>
                    <div className="body-content">
                        <img src={props.imageUrl} alt="licence" />
                        {/* <h2> {props.title} </h2>
                        <p> {props.description} </p> */}
                        <span className="text">- Upload JPG, PNG and Max file size 5 MB</span>
                        <div>
                            {/* <WhiteButton> {props.noButton} </WhiteButton> */}
                            <BlueButton> {props.yesButton} </BlueButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ImageExpander = styled(ImageExpanderComponent)`
    .popup-wrapper{
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .popup-container{
        background-color: white;
        border-radius: 10px;
        width: 550px;
        height: 500px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;  
    }
    .header{
        padding: 5px 5px 0 20px;
        p{
            margin: 0;
            text-align: center;
            color: #333;
            font-size: 17px;
        }
    }
    .body-content{
        padding: 20px;
        text-align: center;
        span.text{
            color: #333;
            font-size: 12px;
            font-weight: normal;
            border: 0!important;
        }
        img{
            width: 100%!important;
        }
        // h2{
        //     font-size: 16px;
        // }
        // p{
        //     font-size: 12px;
        // }
    }
    // .footer{
    //     padding: 20px;
    // }
`;
