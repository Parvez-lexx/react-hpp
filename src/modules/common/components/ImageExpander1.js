import React from 'react';
import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { WhiteButton, BlueButton } from '../components/Button.page';

function ImageExpanderComponent(props) {
    /* onChange =(e) => 
    {
        let files = e.target.files;
        console.warn("data files", files)
    } */
    

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
                        <div className="select-button">
                            <input type="file" name="file" onChange={(e)=>props.onChange(e)} />
                            {/* <button>Select Button</button> */}
                        </div>
                    </div>
                    <div className="footer">
                        <span className="text">- Upload JPG, PNG and Max file size 5 MB</span>
                        <BlueButton> {props.yesButton} </BlueButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ImageExpander1 = styled(ImageExpanderComponent)`
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
        height: 550px;
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
        position: relative;
        img{
            width: 100%!important;
            position: relative;
        }
        .select-button{
            position: absolute;
            bottom: 40px;
            right: 0px;
            button {
                // border: none;
                color: #6c7582;
                padding: 5px 15px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
            }
            input{
                position: relative;
                right: -151px;
            }
        }
    }
    .footer{
        padding: 0px 20px 20px 20px;
        width: 100%;
        text-align: center;
        span.text{
            color: #333;
            font-size: 12px;
            font-weight: normal;
            border: 0!important;
            display: inline-block;
            width: 100%;
        }
    }
`;
