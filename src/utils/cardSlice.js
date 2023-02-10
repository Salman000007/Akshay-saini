import { createSlice } from "@reduxjs/toolkit";

const cardSlice  = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers : {
    additem : (state, action) => {
        state.items.push(action.payload);
    },
    clearCart : (state) => {
        state.items = [];
    },
    removeItem : (state) => {
        state.items.pop()
    }
}
})

export const {additem, clearCart, removeItem} = cardSlice.actions;

export default cardSlice.reducer;   

