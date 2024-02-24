import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userUid: null,
    userEmail: null,
    userName: null,
    activeAuth: false
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

    }
})

export const { toggleAuthWin, authUser } = userSlice.actions;
export default userSlice.reducer;