import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const { name, price, amount } = action.payload;
            const existingItem = state.cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.amount += amount;
            } else {
                state.cart.push({ name, price, amount });
            }
        },
        removeFromCart: (state, action) => {
            const { name } = action.payload;
            state.cart = state.cart.filter(item => item.name !== name);
        },
        removeAllFromCart: (state, action) => {
            state.cart = [];
        }
    }
});

export const { addToCart ,removeFromCart,removeAllFromCart} = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export default cartSlice.reducer;
