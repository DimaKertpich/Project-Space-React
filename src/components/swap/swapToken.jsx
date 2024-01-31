import './swapTokenStyle.scss'
import Exchanger from './exchanger/exchangerToken'
import LastOperation from './exchanger/lastOperation';

function SwapToken(){

    return(
        <div className="swap">
            <div className="container">
                <div className="swap__wrapper">
                    <Exchanger></Exchanger>
                    <LastOperation></LastOperation>
                </div>
            </div>
        </div>
    )
}

export default SwapToken;