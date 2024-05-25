import {createSlice} from '@reduxjs/toolkit';
export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
        searchQuery: 'Bentley Focus'
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});
export const {setSearchQuery} = searchQuerySlice.actions;
export const selectSearchQuery = state => state.searchQuery.searchQuery;
export default searchQuerySlice.reducer;
