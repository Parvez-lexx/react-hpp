import React from 'react';
import styled from 'styled-components';

function LoaderComponent(props) {
    return(
        <div className={props.className}>
            <div className="wrapper">
                <div className="container">
                    <div className="flexbox">
                        <div>
                            <div class="bt-spinner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Loader = styled(LoaderComponent)`
    .wrapper{
        background-color: rgba(0,0,0,0.6);
        position: fixed;
    }
    .container{
        position: absolute;
        width: 140px;
        height: 140px;
        background-color: white;
        padding: 20px;
        border-radius: 6px;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .flexbox {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
      
    .flexbox > div {
        -webkit-box-flex: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
    }
    .bt-spinner {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: transparent;
        border: 4px solid #222;
        border-top-color: #009688;
        -webkit-animation: 1s spin linear infinite;
        animation: 1s spin linear infinite;
    }

    -webkit-@keyframes spin {
        -webkit-from {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        -webkit-to {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @-webkit-keyframes spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @keyframes spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
`;