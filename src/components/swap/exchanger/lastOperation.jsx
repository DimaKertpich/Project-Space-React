import React from "react"
import './lastOperationStyle.scss'
import { useSelector } from "react-redux"

function LastOperation(){

    const lastSwap = useSelector((state) => state.swap.swapComplate)

    return(
        <div className="last">
            <div className="last__wrapper" >
                { lastSwap.length === 0 && 
                    <div className="last__wrapper-toInform">
                        <p>
                            Make a purchase to complete the story
                        </p>
                    </div>
                }
                




                {lastSwap.slice(-4).map((innerArray, outerIndex) => (
                    <div className="last__wrapper-block" key={outerIndex}>
                        {innerArray.map((item, innerIndex) => (
                            <div key={innerIndex} className="last__wrapper-item-operation-info">
                                <div className="last__wrapper-item-operation-info-left">
                                    <div className="last__wrapper-item-operation-info-left-token">
                                        <div><img src={item.image} alt="token"></img></div>
                                            <div className="last__wrapper-item-operation-info-left-token-price">
                                                <p>
                                                    { item.name}
                                                    <br></br>
                                                    <span>{ item.price}$</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="last__wrapper-item-operation-info-left-sell">
                                            <p style={{color: item.color}}>{ item.action }</p>
                                        </div>
                                    </div>
                                    <div className="last__wrapper-item-operation-info-swapPrice">
                                        <div style={{color: item.color}}>{item.arithmetic}{parseFloat(item.swapPrice).toFixed(3).replace(/\.?0+$/, '')}</div>
                                        <div style={{color: item.color}}>{ item.abb}</div>
                                    </div>
                                </div> 
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
} 
export default LastOperation;

// {lastSwap.map((innerArray, outerIndex) => (
//     <div className="last__wrapper-block" key={outerIndex}>
//         {innerArray.map((item, innerIndex) => {
//             const itemKey = JSON.stringify(item);
//             if (!uniqueItems[itemKey]) {
//                 uniqueItems[itemKey] = true;
//                 return (
//                     <div className="last__wrapper-item-operation" key={innerIndex}>
//                         { item.name }
//                     </div>   
//                 );
//             }
//             return null;
//         })}
//     </div>
// ))}

                    