import { createSlice } from '@reduxjs/toolkit';

// Load cart state from local storage
const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return {
                cart: []
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error loading cart state from local storage:', err);
        return {
            cart: []
        };
    }
};

// Save cart state to local storage
const saveCartState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        console.error('Error saving cart state to local storage:', err);
    }
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: loadCartState(), // Load cart state from local storage
    reducers: {
        addToCart: (state, action) => {
            const { name, price, amount } = action.payload;
            const existingItem = state.cart.find((item) => item.name === name);
            if (existingItem) {
                existingItem.amount += amount;
            } else {
                state.cart.push({ name, price, amount });
            }
            // Save updated cart state to local storage
            saveCartState(state);
        },
        removeFromCart: (state, action) => {
            const { name } = action.payload;
            state.cart = state.cart.filter((item) => item.name !== name);
            // Save updated cart state to local storage
            saveCartState(state);
        },
        removeAllFromCart: (state, action) => {
            state.cart = [];
            // Save updated cart state to local storage
            saveCartState(state);
        },
    },
});

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart?.cart;
export default cartSlice.reducer;
