import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    theme : 'light',
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        toggleTheme: (state) =>{
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;

// The value of `theme` is returned as the result of selecting it with `select`
// export const selectTheme = ()=> themeSlice.selector((state)=> state.