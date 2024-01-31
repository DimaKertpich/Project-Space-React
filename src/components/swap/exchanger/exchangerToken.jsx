import React from "react"
import './exchangerStyle.scss'
import SelectToken from "./selectToken"
import { useSelector, useDispatch } from "react-redux"
import { toggleTokens } from "../../store/swapTokenSlice"


function ExchangerToken(){

    let toggleTokensInfo = useSelector((state) => state.swap.showToken)
    let activeTokens = useSelector((state) => state.swap.arrayTokens)
    let firstToken = useSelector((state) => state.swap.electTokenFirst)
    let secondToken = useSelector((state) => state.swap.electTokenSecond)
    let dispatch = useDispatch();

    function toggleOrder(value){
        let marker = document.querySelector('.exchanger__wrapper-order-market')
        let limit = document.querySelector('.exchanger__wrapper-order-limit')

        if(value === 'market'){
            marker.classList.add('activeOrder')
            limit.classList.remove('activeOrder')
        } else if(value === 'limit'){
            limit.classList.add('activeOrder')
            marker.classList.remove('activeOrder')
        }
    }

    return(
        <div className="exchanger">
            <div className="exchanger__wrapper">
                <div className="exchanger__wrapper-order">
                    <div onClick={() => toggleOrder('market')} className="exchanger__wrapper-order-market activeOrder">Market</div>
                    <div onClick={() => toggleOrder('limit')} className="exchanger__wrapper-order-limit">Limit</div>
                </div>

                <div className="exchanger__wrapper-swap">
                    <div className="exchanger__wrapper-swap-from">
                        <div className="exchanger__wrapper-swap-from-select">
                            <div className="exchanger__wrapper-swap-from-select-from">From:</div>
                            <div 
                                onClick={() => dispatch(toggleTokens('first'))} 
                                className="exchanger__wrapper-swap-from-select-token">
                                    { firstToken === null ? 'Select Token' : <img src={activeTokens[firstToken].image} alt="token"></img> }
                            </div>
                        
                        </div>
                    </div>
                    <div className="exchanger__wrapper-swap-to">
                        <div className="exchanger__wrapper-swap-to-select">
                            <div className="exchanger__wrapper-swap-to-select-to">To:</div>
                            <div 
                                onClick={() => dispatch(toggleTokens('second'))} 
                                className="exchanger__wrapper-swap-to-select-token">
                                    { secondToken === null ? 'Select Token' : <img src={activeTokens[secondToken].image} alt="token"></img> }

                            </div>
                        </div>
                    </div>

                    <div className="exchanger__wrapper-swap-btn">
                        <button type="button">Exchange tokens</button>
                    </div>
                </div>
            </div>
            { toggleTokensInfo === true &&  <SelectToken></SelectToken>}
        </div>
    )
}

export default ExchangerToken;

