import React, { Component } from 'react';
import styled from 'styled-components';
import { BlueButton } from '../../common/components/Button.page';
import { FieldInput } from '../../common/components/FieldInput';
import { Result } from '../../Practise/Page/Result';

class PracticeComponent extends Component{

    state ={
        inputValue: 0,
        gotValue: 0,
    };

    _inputValue = (e) => {
        console.log("Value :", e.target.value)
        this.setState({ inputValue: e.target.value });
    }


    _handleAdd = () => {
        var inputValue = parseInt(this.state.inputValue); //1
        var gotValue = this.state.gotValue; // 0

        this.setState({
            gotValue: inputValue + gotValue,
            inputValue: 0   
        })
    }

    _handleValuePlus = () => {
        this.setState({
           inputValue: parseInt(this.state.inputValue) + 1 
        })
    }

    _handleValueMinus = () => {
        if(this.state.inputValue > 0){
            this.setState({
                inputValue: parseInt(this.state.inputValue) - 1 
            })
        }
    }

    componentWillMount(){
        console.log("will Mount")
    }

    componentDidMount(){
        console.log("did Mount")
    }

    componentWillReceiveProps() {
        console.log("wii receive props")
    }

    componentDidUpdate() {
        console.log("did update")
    }

    componentWillUnmount() {
        console.log("will unmount")
    }


    render() {
        console.log("state :", this.state.inputValue)
        return(
            <div className={this.props.className}>
                <div className="wrapper">
                    <div className="container">
                        <div className="left-content">
                            <FieldInput
                                type="text" 
                                placeholder="Please enter a value"
                                onChange={this._inputValue}
                                value={this.state.inputValue}
                            />
                            <div className="btn-wrap">
                                <BlueButton onClick={this._handleAdd}>Add</BlueButton>
                                <div className="buttons-content">
                                    <button className="plus-btn" 
                                        onClick={this._handleValuePlus}> + </button>
                                    <button className="minus-btn" 
                                        onClick={this._handleValueMinus}> - </button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="right-content">
                            <h1>{this.state.gotValue}</h1>
                        </div> */}
                        <Result 
                            gotValue={this.state.gotValue}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export const Practice = styled(PracticeComponent)`
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


