import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

const HeaderComponent = (props) => {
    return (
        <div className={props.className}>
            <div className="header">
                <div className="left-panel"> 
                    <FaHome /> 
                </div>
                <div className="right-panel">
                    <FaHome />
                </div>
            </div>
        </div>
    );
}

export const Header = styled(HeaderComponent)`
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
    // margin-left: 203px;
    // position: fixed;
    // width: 85%;
    // top: 0;
    // z-index: 10;
    box-shadow: 0 2px 2px 0 rgba(16, 19, 21, 0.1);
    .left-panel{}
    .right-panel{}
`;