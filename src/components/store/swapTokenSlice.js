import { createSlice } from "@reduxjs/toolkit";
import Usdt from '../../assets/image/swap/usdt.png'
import Bitcoin from '../../assets/image/swap/bitcoin.png'
import Ethereum from '../../assets/image/swap/ethereum.png'
import Near from '../../assets/image/swap/near.png'
import OneInch from '../../assets/image/swap/1Inch.png'
import Solana from '../../assets/image/swap/solana.png'
import Atom from '../../assets/image/swap/atom.png'
import Xrp from '../../assets/image/swap/xrp.png'

const initialState = {
    showToken: false,
    arrayTokens: [
        {
            name: 'Usdt',
            image: Usdt,
            price: '1',
            count: 1000,
            abb: 'usdt',
            id: 0
        },
        {
            name: 'Bitcoin',
            image: Bitcoin,
            price: '44000',
            count: 0,
            abb: 'btc',
            id: 1
        },
        {
            name: 'Ethereum',
            image: Ethereum,
            price: '2100',
            count: 0,
            abb: 'eth',
            id: 2
        },
        {
            name: 'Near',
            image: Near,
            price: '3',
            count: 0,
            abb: 'near',
            id: 3
        },
        {
            name: '1Inch',
            image: OneInch,
            price: '1',
            count: 0,
            abb: 'oneInch',
            id: 4
        },
        {
            name: 'Solana',
            image: Solana,
            price: '100',
            count: 0,
            abb: 'sol',
            id: 5
        },
        {
            name: 'Atom',
            image: Atom,
            price: '10',
            count: 0,
            abb: 'atom',
            id: 6
        },
        {
            name: 'XRP',
            image: Xrp,
            price: '1',
            count: 0,
            abb: 'xrp',
            id: 7
        }
    ],
    countSwap: null,
    electTokenFirst: null,
    electTokenSecond: null,
    swapComplate: []
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
        },

        changeCountArrayTokens(state, actions){
            state.arrayTokens[state.electTokenFirst].count = state.arrayTokens[state.electTokenFirst].count - actions.payload.currentInput
            state.arrayTokens[state.electTokenSecond].count = state.arrayTokens[state.electTokenSecond].count + actions.payload.getToken
        },

        changeArrayTokens(state, actions){
            state.swapComplate = [...state.swapComplate, actions.payload]
        }
    }
})

export const {toggleTokens, selectToken, changeCountArrayTokens, changeArrayTokens} = swapToken.actions;
export default swapToken.reducer;