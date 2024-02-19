import React, {useState} from "react"
import { useUpdateEffect } from 'usehooks-ts'
import './exchangerStyle.scss'
import SelectToken from "./selectToken"
import ModalWinSwap from "./modalWinSwap"
import { useSelector, useDispatch } from "react-redux"
import { toggleTokens, changeArrayTokens, changeCountArrayTokens } from "../../store/swapTokenSlice"


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

    let pattern = /^$|^\d+(\.\d+)?$/
    let [currentInput, setCurrentInput] = useState(0)
    let [getToken, setGetToken] = useState(0)

    function currentQuantity(value){
        
        if(pattern.test(value) && firstToken !== null && secondToken !== null && value <= activeTokens[firstToken].count){
            setCurrentInput(currentInput = value)
            setGetToken(getToken = value * activeTokens[firstToken].price / activeTokens[secondToken].price)
        }
    }

    // Функція для активування обмінника

    let [toggleSwapMess, setToggleSwapMess] = useState(false)
    
    function modalWinSwap(){
        if(firstToken === null && secondToken === null){
            setToggleSwapMess(toggleSwapMess = !toggleSwapMess)
        }
    }

    // Обмін монет

    function exchangeTokens(){
        dispatch(changeCountArrayTokens({currentInput, getToken}))
        
        dispatch(changeArrayTokens([
            {
                name: activeTokens[firstToken].name,
                image: activeTokens[firstToken].image,
                price: activeTokens[firstToken].price,
                swapPrice: currentInput,
                abb: activeTokens[firstToken].abb,
                action: 'Sell',
                color: '#D31C1C'
            },
            {
                name: activeTokens[secondToken].name,
                image: activeTokens[secondToken].image,
                price: activeTokens[secondToken].price,
                swapPrice: getToken,
                abb: activeTokens[secondToken].abb,
                action: 'Buy',
                color: '#1B9A37'
            }
        ]))

        setCurrentInput(currentInput = 0)
        setGetToken(getToken = 0)
    }

    // Active button swap

    let [activeSwap, setActiveSwap] = useState(false)

    useUpdateEffect(() =>{
        console.log(1)
        setActiveSwap(activeSwap = true)
    }, [currentInput])

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
                            <div className="exchanger__wrapper-swap-from-select-from">
                                From: {Number.isInteger(firstToken) && <span>{ activeTokens[firstToken].name }</span>}
                            </div>
                            <div 
                                onClick={() => dispatch(toggleTokens('first'))} 
                                className="exchanger__wrapper-swap-from-select-token">
                                    { firstToken === null ? 'Select Token' : <img src={activeTokens[firstToken].image} alt="token"></img> }
                            </div>
                        
                        </div>
                        <div onClick={() => modalWinSwap()} className="exchanger__wrapper-swap-from-input">
                            <div>{firstToken != null && `Max: ${activeTokens[firstToken].count}` }</div>
                            <input 
                                value={currentInput}
                                onChange={(e) => currentQuantity(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className="exchanger__wrapper-swap-to">
                        <div className="exchanger__wrapper-swap-to-select">
                            <div className="exchanger__wrapper-swap-to-select-to">
                                To: {Number.isInteger(secondToken) && <span>{ activeTokens[secondToken].name }</span>} 
                            </div>
                            <div 
                                onClick={() => dispatch(toggleTokens('second'))} 
                                className="exchanger__wrapper-swap-to-select-token">
                                    { secondToken === null ? 'Select Token' : <img src={activeTokens[secondToken].image} alt="token"></img> }

                            </div>
                        </div>
                        <div className="exchanger__wrapper-swap-to-input">
                        <div>{secondToken != null && `Max: ${activeTokens[secondToken].count}` }</div>
                            <input value={getToken} readOnly></input>
                        </div>
                    </div>

                    <div onClick={() => modalWinSwap()} className="exchanger__wrapper-swap-btn">
                        {activeSwap === false ? <button type="button">Must Select Token</button> : <button onClick={() => exchangeTokens()} type="button">Exchange tokens</button>}
                    </div>
                </div>
            </div>
            { toggleTokensInfo === true &&  <SelectToken></SelectToken>}
            { toggleSwapMess === true && <ModalWinSwap activeModalWin={modalWinSwap}></ModalWinSwap>}
        </div>
    )
}

export default ExchangerToken;

