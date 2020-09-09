import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './Accordion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function AccordionWithChildrenComponent(props) {

    const [isExpand, setExpand] = useState(false)
     return(
        <div className={props.className}>
            <div className="wrapper">
                <div className="accordion-box">
                    <h3 onClick={() => setExpand(!isExpand)} >
                        {props.title} 
                        {isExpand ? <FaChevronUp /> : <FaChevronDown />}
                    </h3>
                    <div className={`content-hide ${isExpand ? "show" : ""}`} style={{margin: 0}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AccordionWithChildren = styled(AccordionWithChildrenComponent)`
    .wrapper{
        margin-bottom: 20px;
    }
    .accordion-box{
        h3{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            font-size: 14px;
            margin: 0;
            font-weight: 500;
            color: #0e1d32;
            border-radius: 5px 5px 0 0;
            border: 1px solid #ccc;
            transition: all 0.3s;
            span{
                color: #cacdd1;
            }
        }
        .content-hide{
            display: none;
            transition: all 0.5s;
            &.show{
                display: block;
                transition: all 0.5s;
            }
        }
    }
`;