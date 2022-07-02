import {createSlice,configureStore} from "@reduxjs/toolkit"
const GlobalState=createSlice({
    name:"globalState",
    initialState:{
        Movie:[],
        Catologe:[],
    },
    reducers:{
        SetNewMovie(state,action){
            state.Movie = action.payload
        },
        SetCatologe(state,action){
            state.Catologe=action.payload
        }
    }
    
})

export const action = GlobalState.actions;

const store=configureStore({
    reducer:GlobalState.reducer
})

export default store