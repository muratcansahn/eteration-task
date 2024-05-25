import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const { name, price } = action.payload;
            state.cart.push({ name, price });
        }
    }
});

export const { addToCart } = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export default cartSlice.reducer;
