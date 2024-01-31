import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeAuth: false
}

export const userSlice = createSlice({
    name: 'authorizationUser',
    initialState,
    reducers: {
        toggleAuthWin(state){
            state.activeAuth = !state.activeAuth
        }
    }
})

export const { toggleAuthWin } = userSlice.actions;
export default userSlice.reducer;