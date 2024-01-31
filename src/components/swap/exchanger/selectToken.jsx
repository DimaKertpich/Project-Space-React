import './selectTokenStyle.scss'
import { useSelector, useDispatch } from "react-redux"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleTokens, selectToken } from '../../store/swapTokenSlice'

function SelectToken(){

    let arrayToken = useSelector((state) => state.swap.arrayTokens)
    let dispatch = useDispatch();
    
    let showArrayToken = arrayToken.map((item) =>(
        <div onClick={() => dispatch(selectToken(item.id))} className='selectToken__wrapper-tokens' key={item.id} >
            <div className='selectToken__wrapper-tokens-title'>
                <div className='selectToken__wrapper-tokens-title-img'>
                    <img src={item.image} alt={item.name}></img>
                </div>
                <div className='selectToken__wrapper-tokens-title-name'>
                    { item.name }
                </div>
            </div>
            <div className='selectToken__wrapper-tokens-price'>
                { item.price}$
            </div>
        </div>
    ))

    return(
        <div className="selectToken"> 
            <div className='selectToken__wrapper'>
                <div className='selectToken__wrapper-title'>
                    <div><h3>Choose a coin</h3></div>
                    <div><FontAwesomeIcon 
                            onClick={() => dispatch(toggleTokens())} 
                            className='selectToken__wrapper-title-faXmark' 
                            icon={faXmark}>
                        </FontAwesomeIcon></div>
                </div>
                <div className='selectToken__wrapper-search'>
                    <input placeholder='Search'></input>
                </div>

                <div className='selectToken__wrapper-choose'>
                    {showArrayToken}
                </div>
            </div>
        </div>
    )
}

export default SelectToken;