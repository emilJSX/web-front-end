import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    toggle:false,
    loginStepper: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        loginControll:(state,action)=> {
            console.log("STATE IS CHANGE")
            state.loginStepper = !state.loginStepper
        },
        drawerControll:(state,action)=>{
            state.toggle = !state.toggle;
            if (state.toggle) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,drawerControll, loginControll } = counterSlice.actions

export default counterSlice.reducer