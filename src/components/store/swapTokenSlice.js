import { createSlice } from "@reduxjs/toolkit";
import Bitcoin from '../../assets/image/swap/3838998_bitcoin_cryptocurrency_currency_money_finance_icon.png'
import Ethereum from '../../assets/image/swap/4373172_ethereum_logo_logos_icon.png'
import Near from '../../assets/image/swap/9297394_near_blockchain_coins_cryptocurrency_crypto_icon.png'
import OneInch from '../../assets/image/swap/icons8-1inch-64.png'
import Solana from '../../assets/image/swap/icons8-solana-512.png'
import Atom from '../../assets/image/swap/science_9744839.png'
import Xrp from '../../assets/image/swap/xrp_4279259.png'

const initialState = {
    showToken: false,
    arrayTokens: [
        {
            name: 'Bitcoin',
            image: Bitcoin,
            price: '44000',
            count: 0,
            id: 0
        },
        {
            name: 'Ethereum',
            image: Ethereum,
            price: '2100',
            count: 0,
            id: 1
        },
        {
            name: 'Near',
            image: Near,
            price: '3',
            count: 0,
            id: 2
        },
        {
            name: '1Inch',
            image: OneInch,
            price: '1',
            count: 0,
            id: 3
        },
        {
            name: 'Solana',
            image: Solana,
            price: '100',
            count: 0,
            id: 4
        },
        {
            name: 'Atom',
            image: Atom,
            price: '10',
            count: 0,
            id: 5
        },
        {
            name: 'XRP',
            image: Xrp,
            price: '1',
            count: 0,
            id: 6
        }
    ],
    countSwap: null,
    electTokenFirst: null,
    electTokenSecond: null,
}

export const swapToken = createSlice({
    name: 'swapToken',
    initialState,
    reducers: {
        toggleTokens(state, actions){
            state.showToken = !state.showToken
            state.countSwap = actions.payload
        },

        selectToken(state, actions){
            if(state.countSwap === 'first'){
                state.electTokenFirst = actions.payload
                state.showToken = false
            }
            if(state.countSwap === 'second'){
                state.electTokenSecond = actions.payload
                state.showToken = false
            }
        }
    }
})

export const {toggleTokens, selectToken} = swapToken.actions;
export default swapToken.reducer;