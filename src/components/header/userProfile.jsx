import React, {useState} from 'react';
import './userProfileStyle.scss'
import { useDispatch, useSelector } from "react-redux"
import {clearUserUid} from '../../components/store/authUserSlice';

function UserProfile({offDashboard}){

    function toggleDashboard(){
        offDashboard();
    }

    function deActiveDashboard(){
        offDashboard();
        dispatch(clearUserUid())
    }

    const dispatch = useDispatch();
    const userEmail = useSelector((state) => state.auth.userEmail)
    const userName = useSelector((state) => state.auth.userName)
    const cryptoArray = useSelector((state) => state.swap.arrayTokens)
    const cryptoLastOperation = useSelector((state) => state.swap.swapComplate)
    let [toggleWin, setToggleWin] = useState(true)

    function toggleInfo(value){
        let yourCrypto = document.querySelector('.profile__wrapper-toggle-title-crypto')
        let lastOperation = document.querySelector('.profile__wrapper-toggle-title-operation')

        if(value === 'yourCrypto'){
            yourCrypto.classList.add('currentlyDiv')
            lastOperation.classList.remove('currentlyDiv')
            setToggleWin(true)
        }else if(value === 'lastOperation'){
            lastOperation.classList.add('currentlyDiv')
            yourCrypto.classList.remove('currentlyDiv')
            setToggleWin(false)
        }
    }

    return(
        <div className='profile'>
            <div className='profile__wrapper'>
                <div className='profile__wrapper-title'>
                    <p id="profile__name">Name: { userName }</p>
                    <p>Email: { userEmail }</p>
                </div>
                <div className='profile__wrapper-statistics'>
                    <div className='profile__wrapper-toggle-title'>
                        <div className='profile__wrapper-toggle-title-crypto currentlyDiv' onClick={() => toggleInfo('yourCrypto')}>Your Crypto</div>
                        <div className='profile__wrapper-toggle-title-operation' onClick={() => toggleInfo('lastOperation')}>Last Operation</div>
                    </div>

                   {toggleWin === true && 
                     <div>
                        <div className='profile__wrapper-crypto-table'>
                            <div className='profile__wrapper-crypto-table-name'>Name</div>
                            <div className='profile__wrapper-crypto-table-price'>Price</div>
                            <div className='profile__wrapper-crypto-table-count'>Your count</div>
                        </div>
                        <div className='profile__wrapper-toggle-statistics-crypto'>
                            {cryptoArray.map((item) =>(
                                <div className='profile__wrapper-toggle-statistics-crypto-data' key={item.id}>
                                    <div className='profile__wrapper-toggle-statistics-crypto-data-nav'>

                                        <div className='profile__wrapper-toggle-statistics-crypto-data-nav-name'>
                                            <div className='profile__wrapper-toggle-statistics-crypto-data-nav-name-img'>
                                                <img src={item.image} alt="image"></img>
                                            </div>
                                            <div className='profile__wrapper-toggle-statistics-crypto-data-nav-name-text'>
                                                { item.name }
                                            </div>
                                        </div>

                                        <div className='profile__wrapper-toggle-statistics-crypto-data-price'>
                                        { item.price}$
                                        </div>

                                        <div className='profile__wrapper-toggle-statistics-crypto-data-count'>
                                            { parseFloat(item.count).toFixed(3).replace(/\.?0+$/, '') }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                   }

                   {toggleWin === false &&
                   
                    <div>
                    
                    <div className='profile__wrapper-crypto-table'>
                            <div className='profile__wrapper-crypto-table-name'>Name</div>
                            <div className='profile__wrapper-crypto-table-price'>Operation</div>
                            <div className='profile__wrapper-crypto-table-count'>Exchange</div>
                        </div>

                    <div className='profile__wrapper-lastOperation'>
                            {cryptoLastOperation.map((innerArray, outerIndex) => (
                                <div key={outerIndex} className='profile__wrapper-lastOperation-data'>
                                    {innerArray.map((item, index) =>(
                                        <div key={index} className='profile__wrapper-lastOperation-data-block'>
                                            <div className='profile__wrapper-lastOperation-data-block-title'>
                                                <div className='profile__wrapper-lastOperation-data-block-title-img'><img src={item.image}></img></div>
                                                <div className='profile__wrapper-lastOperation-data-block-title-name'>{item.name}</div>
                                            </div>
                                            <div style={{color: item.color}} className='profile__wrapper-lastOperation-data-block-action'>{ item.action }</div>
                                            <div style={{color: item.color}} className='profile__wrapper-lastOperation-data-block-price'>
                                                {parseFloat(item.swapPrice).toFixed(3).replace(/\.?0+$/, '')} { item.abb }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                   }
                </div>

                <div className='profile__wrapper-btn'>
                   <button onClick={() => toggleDashboard()} type='button'>Back</button>
                   <button onClick={() => deActiveDashboard()} id='profile__btn-logOut' type='button'>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;