import React, { Component } from 'react';
import styled from 'styled-components';
import { BlueButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { Result } from '../../Practise/Page/Result';
import { AiOutlineCloseCircle } from 'react-icons/ai';

class PracticeComponent extends Component{

    state ={
        inputValue: 0,
        gotValue: 0,
        name: "",
        nameError: false
    };

    _inputValue = (e) => {
        const name = e.target.value;
        if(name === "" || new RegExp(/^[a-zA-Z]*$/g).test(name)) {
            this.setState({
                inputValue: name,
                nameError: true
            })
        }
        else{
            this.setState({
                nameError: false
            })
        }
    }


    _handleAdd = () => {
        var inputValue = parseInt(this.state.inputValue); //1
        var gotValue = this.state.gotValue; // 0

        this.setState({
            gotValue: inputValue + gotValue,
            inputValue: 0   
        })
    }


    render() {
        console.log("state :", this.state.inputValue)
        return(
            <div className={this.props.className}>
                <div className="wrapper">
                    <div className="container">
                        <div className="left-content">
                            <div style={{display: 'flex'}}>
                                <FieldInput
                                    type="text" 
                                    placeholder="Please enter a value"
                                    onChange={this._inputValue}
                                    value={this.state.inputValue}
                                    isError={this.state.nameError}
                                />
                                <span 
                                    style={{position: 'relative', top: 10, left: 10, fontSize: 25}}>
                                    <AiOutlineCloseCircle />
                                </span>
                            </div>
                            {this.state.nameError ?
                                <span className="error-field" style={{color: 'red', marginTop: 10, display: 'inline-block', fontSize: 12}}>
                                "This name format is not valid"
                                </span>
                                : null
                            }
                            <div className="btn-wrap">
                                <BlueButton onClick={this._handleAdd}>Add</BlueButton>
                            </div>
                        </div>
                        <Result 
                            gotValue={this.state.gotValue}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export const Practice1 = styled(PracticeComponent)`
    .wrapper{
        width: 100vw;
        height: 100vh;
        padding: 24px;
    }
    .container{
        background-color: white;
        padding: 24px;
        border-radius: 7px;
        display: flex;
        justify-content: space-between;
    }
    .left-content{
        width: 500px;
        background-color: #ddd;
        border-radius: 5px;
        padding: 30px;
        .btn-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            button{
                margin-left: 0;
            }
            .buttons-content{
                .plus-btn{
                    width: 30px;
                    height: 30px;
                    margin-right: 5px;
                    background-color: green;
                    border: 0;
                    outline: 0;
                    color: white;
                    border-radius: 3px;
                }
                .minus-btn{
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    background-color: red;
                    border: 0;
                    outline: 0;
                    color: white;
                    border-radius: 3px;
                }
            }
        }
    }
`;


