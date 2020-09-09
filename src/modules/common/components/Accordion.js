import React, { Component } from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

class AccordionComponent extends Component{

    state = {
        isExpand: false
    };

    _handleChange = () => {
        this.setState({
            isExpand: !this.state.isExpand
        })
    }


    render(){
        console.log("state", this.state.isExpand)
        return(
            <div className={this.props.className}>
                <div className="wrapper">
                    <div className="accordion-box">
                        <h2 onClick={this._handleChange}>
                            {this.state.isExpand ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            <span>{this.props.title}</span>
                        </h2>
                        <p className={`content ${this.state.isExpand ? "show" : ""}`}>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

AccordionComponent.defaultProps = {
    title: "Dummy title",
    description: "This is a dummy description. This is a dummy description. This is a dummy description. This is a dummy description. This is a dummy description. This is a dummy description. This is a dummy description. This is a dummy description."
}


export const Accordion = styled(AccordionComponent)`
    .wrapper{
        padding: 20px 20px 0 20px;
    }
    .accordion-box{
        margin-bottom: 5px;
        .content {
            display: none;
            &.show {
                display: block;
            }
        }
        h2{
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            margin: 0;
            font-weight: 500;
            color: white;
            border-radius: 5px 5px 0 0;
            background-color: green;
            border-bottom: 1px solid green;
            transition: all 0.3s;
            span{
                margin-left: 5px;
            }
        }
        p{
            color: black;
            line-height: 20px;
            font-size: 14px;
            padding: 15px;
            font-weight: 30;
            margin-top: 0;
            margin-bottom: 5px;
            border: 1px solid #ccc;
            transition: all 1s;
        }
        i{
            font-size: 20px;
            padding: 5px;
            padding-bottom: 0;
            color: white;
        }
    }
`;
