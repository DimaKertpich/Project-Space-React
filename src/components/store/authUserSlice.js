import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userUid: null,
    userEmail: null,
    userName: null,
    activeAuth: false,
    toggleDashboard: false,
    
}

export const userSlice = createSlice({
    name: 'authorizationUser',
    initialState,
    reducers: {
        authUser(state, actions){
            state.userUid = actions.payload.uid
            state.userEmail = actions.payload.email
            state.userName = actions.payload.name

        },

        toggleAuthWin(state){
            state.activeAuth = !state.activeAuth
        },

        clearUserUid(state){
            state.userUid = null
            state.userEmail = null
            state.userName = null
        }

    }
})

export const { toggleAuthWin, authUser, clearUserUid} = userSlice.actions;
export default userSlice.reducer;