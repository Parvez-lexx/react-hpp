import React from 'react';
import styled from 'styled-components';


function OrderCardComponent(props) {
    return(
        <div className={props.className}>
            <div className="card-wrap">
                <p> {props.label} </p>
                <h4> {props.value} </h4>
            </div>
        </div>
    );
}

export const OrderCard  = styled(OrderCardComponent)`
    .card-wrap{
        width: 243px;
        height: 98px;
        border: solid 1px rgba(34, 189, 189, 0.2);
        background-color: rgba(34, 189, 189, 0.1);
        padding: 24px;
        margin-right: 20px;
        p{
            font-size: 10px;
            font-weight: bold;
            color: #22bdbd;
            margin: 0
        }
        h4{
            font-size: 24px;
            font-weight: 500;
            color: #3d495a;
            margin: 0;
            margin-top: 10px;
        }
    }
`;