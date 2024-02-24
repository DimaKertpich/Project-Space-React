import React from 'react';
import './userProfileStyle.scss'
import { useDispatch, useSelector } from "react-redux"

function UserProfile(){

    const dispatch = useDispatch();
    const userEmail = useSelector((state) => state.auth.userEmail)
    const userName = useSelector((state) => state.auth.userName)
    const cryptoArray = useSelector((state) => state.swap.arrayTokens)


    function toggleInfo(value){
        let yourCrypto = document.querySelector('.profile__wrapper-toggle-title-crypto')
        let lastOperation = document.querySelector('.profile__wrapper-toggle-title-operation')
        
        if(value === 'yourCrypto'){
            yourCrypto.classList.add('currentlyDiv')
            lastOperation.classList.remove('currentlyDiv')
        }else if(value === 'lastOperation'){
            lastOperation.classList.add('currentlyDiv')
            yourCrypto.classList.remove('currentlyDiv')
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
            </div>
        </div>
    )
}

export default UserProfile;