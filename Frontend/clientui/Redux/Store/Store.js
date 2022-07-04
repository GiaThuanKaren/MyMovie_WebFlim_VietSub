import {createSlice,configureStore} from "@reduxjs/toolkit"
const GlobalState=createSlice({
    name:"globalState",
    initialState:{
        Movie:[],
        Catologe:[],
        CurListMovie:[],
        IdMovie:null,
        CurCatologe:"",
        CurPage:1,
        TabIsClose:true
    },
    reducers:{
        SetNewMovie(state,action){
            state.Movie = action.payload
        },
        SetCatologe(state,action){
            console.log("Set catologe")
            state.Catologe=action.payload
        },
        SetCurMovieList(state,action){
            state.CurListMovie= action.payload
        },
        SetCurCatologe(state,action){
            state.CurCatologe=action.payload
        },
        SetCurPage(state,action){
            state.CurPage=action.payload
        },
        SetOpenTab(state,action){
            state.TabIsClose= action.payload
        }
    }
    
})

export const action = GlobalState.actions;

const store=configureStore({
    reducer:GlobalState.reducer
})

export default store