import {createSlice,configureStore} from "@reduxjs/toolkit"
const GlobalState=createSlice({
    name:"globalState",
    initialState:{
        Movie:[],
        Catologe:[],
        CurListMovie:[]
    },
    reducers:{
        SetNewMovie(state,action){
            state.Movie = action.payload
        },
        SetCatologe(state,action){
            state.Catologe=action.payload
        },
        SetCurMovieList(state,action){
            state.CurListMovie= action.payload
        }
    }
    
})

export const action = GlobalState.actions;

const store=configureStore({
    reducer:GlobalState.reducer
})

export default store