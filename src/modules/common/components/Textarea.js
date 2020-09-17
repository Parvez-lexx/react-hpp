import React from 'react'
import styled from 'styled-components';

function TextareaComponent(props) {
    // console.log("props", props)
    return(
        <div className={props.className}>
            <textarea 
                className={props.isError ? "error-field-bdr" : ""} 
                placeholder={props.placeholder} 
                onChange={props.onChange} 
                id={props.id}
                value={props.value}
                rows="3"
                style={props.style}
                disabled={props.disabled}
            />                   
        </div>
    )
} 

TextareaComponent.defaultProps = {
   type: "text"
}

export const Textarea = styled(TextareaComponent)`
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