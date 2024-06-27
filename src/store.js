import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {value: {loginUser: ''}, count: null};

export const userSlice = createSlice({
    name: 'rtk',
    initialState,
    reducers:{
        login: (state, action) => {
            state.value = action.payload;
        },
        logout:(state) =>{
            state.value = initialState.value;
            state.count = initialState.count;
          
        },
        increment: (state) =>{
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }

    }
}) 
// export const selectValue = (state) => state.rtk.value.loginUser;

export const {login, logout, increment, decrement} = userSlice.actions;

export const store = configureStore({
    reducer:{
        rtk: userSlice.reducer
    }
})