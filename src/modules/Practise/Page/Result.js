import React from 'react';
import styled from 'styled-components';

function ResultComponent(props) {
    return(
        <div className={props.className}>
                <div className="right-content">
                    <ul>
                        <li>{props.gotValue}</li>
                    </ul>
                    {/* <h1> {props.gotValue} </h1> */}
                </div>
        </div>
    );
}

export const Result = styled(ResultComponent)`
    width: 200px;
    .right-content{
        background-color: #ddd;
        padding: 30px;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-radius: 5px;
        ul{
            list-style: none;
            margin: 0;
            padding:0;
            li{
                margin-bottom: 10px;
                color: green;
                font-size: 16px;
            }
        }
        /* h1{
            font-size: 50px;
            color: green;
        } */
    }
`;