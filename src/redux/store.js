import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import autoCompleteOptionsReducer from './autoCompleteOptionsSlice';
import searchQuerySliceReducer from './searchQuerySlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        autoCompleteOptions: autoCompleteOptionsReducer,
        searchQuery: searchQuerySliceReducer
    }
});

export default store;