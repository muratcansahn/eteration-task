import {createSlice} from '@reduxjs/toolkit';

export const autoCompleteOptionsSlice = createSlice({
    name: 'autoCompleteOptions',
    initialState: {
        autoCompleteOptions: []
    },
    reducers: {
        setAutoCompleteOptions: (state, action) => {
            state.autoCompleteOptions = action.payload;
        }
    }
});
export const {setAutoCompleteOptions} = autoCompleteOptionsSlice.actions;
export const selectAutoCompleteOptions = state => state.autoCompleteOptions.autoCompleteOptions;
export default autoCompleteOptionsSlice.reducer;
