import React from 'react'
import styled from 'styled-components';

function FieldInputComponent(props) {
    console.log("props", props)
    return(
        <div className={props.className}>
            <input className={props.isError ? "error-field-bdr" : ""} type={props.type}  placeholder={props.placeholder} onChange={props.onChange} id={props.id}  />                   
        </div>
    )
} 

FieldInputComponent.defaultProps = {
   type: "text"
}

export const FieldInput = styled(FieldInputComponent)`
input{
    width: 100%;
    height: 40px;
    border: 1px solid #cacdd1;
    border-radius: 3px;
    margin-top: 3px;
    padding-left: 10px;
    outline: none;
    &.error-field-bdr{
        border: 1px solid red !important;
    }
}
`;