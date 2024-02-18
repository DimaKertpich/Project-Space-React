import React from 'react';
import './modalWinSwapStyle.scss'

function ModalWinSwap({activeModalWin}){

    function offModalWin(){
        activeModalWin()
    }

    return(
        <div className="modalSwap">
            <h3>Please select a token to exchange</h3>
            <div className="modalSwap__btn">
                <button onClick={() => offModalWin()} type='button' >Ok</button>
            </div>
        </div>
    )
}

export default ModalWinSwap;