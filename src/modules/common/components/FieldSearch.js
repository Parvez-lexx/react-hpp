import React from 'react';
import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

function FieldSearchComponent(props) {
    return(
        <div className={props.className}>
            <div className="search-wrap">
                <input 
                    onChange={props.onChange}
                    isError={props.isError}
                    type={props.type} 
                    placeholder={props.placeholder} 
                />
                <i> <FaSistrix /> </i>
            </div>
        </div>
    );
}

export const FieldSearch = styled(FieldSearchComponent)`
    .search-wrap{
        position: relative;
        width: 210px;
        input{
            width: 200px;
            height: 38px;
            border-radius: 3px;
            border: solid 1px #cacdd1;
            background-color: #ffffff;
            padding: 12px;
        }
        i{
            position: absolute;
            top: 13px;
            right: 23px;
            color: #6c7582;
            font-size: 15px;
        }
        span{
            color: red;
            font-size: 12px;
            margin-top: 10px;
            display: inline-block;
        }
    }
`;
