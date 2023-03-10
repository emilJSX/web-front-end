import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalToggleOption: false
}

export const modalSlice = createSlice({
    name: "modalToggle",
    initialState,
    reducers:{
        setmodalToggle(state, action) {
            state.modalToggleOption = action.payload
        }
    }
})

export const {setmodalToggle} = modalSlice.actions
export default modalSlice.reducer;
