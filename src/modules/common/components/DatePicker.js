import React from 'react';
import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";

function DatePickerComponent(props) {
    return(
        <div className={props.className}>
            <div className="wrapper">
                <DatePicker
                    selected={props.selected}
                    onChange={props.onChange}
                />
                <i> <FaRegCalendarAlt /> </i>
            </div>
        </div>
    );
}

export const DatePickerComp = styled(DatePickerComponent)`
    .wrapper{
        
    }
    .react-datepicker-wrapper{
        position: relative;
        input{
            border-radius: 3px;
            color: #878787;
            border: solid 1px #cacdd1;
            background-color: #ffffff;
            padding: 12px;
        }
        i{
            position: absolute;
            top: 11px;
            right: 21px;
            color: #6c7582;
            font-size: 15px;
        }
    }
`;