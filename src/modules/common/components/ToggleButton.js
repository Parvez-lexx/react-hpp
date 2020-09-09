import React, { Component } from 'react';
import styled from 'styled-components';

class ToggleButtonComponent extends Component{

    state = {
        isClicked: true
    };

    _handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        console.log("state :", this.state.isClicked)
        return(
            <div className={this.props.className}>
                <div className="container">
                    <button className={!this.state.isClicked ? "red-bg" : ""} onClick={ this._handleClick } > 
                        {this.state.isClicked ? "Show" : "Hide"} 
                    </button>
                </div>
            </div>
        );
    }
}

export const ToggleButton = styled(ToggleButtonComponent)`
    .container{
        padding: 20px;  
    }
    button{
        color: white;
        font-size: 1em;
        padding: 0.75em 3.35em;
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: green;
        outline: none;
    }
    .red-bg{
        background-color: red;
    }
`;

