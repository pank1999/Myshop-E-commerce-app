import {createSlice} from '@reduxjs/toolkit';

const clientSlice=createSlice({
    name:'client',
    initialState:{
        currentClients:null,
        isFetching:false,
        error:false,
    },
    reducers:{
        //get all clinets 
        getClientStart:((state)=>{
           state.isFetching=true;
        }),
        getClientSuccess:((state,action)=>{
            state.isFetching=true;
            state.currentClients=action.payload;
        }),
        getClientFailure:((state)=>{
            state.isFetching=false;
            state.error=true;
        }),
        //create client
        createClientStart:((state)=>{
            state.isFetching=true;
         }),
         createClientSuccess:((state,action)=>{
             state.isFetching=true;
             state.currentClients.push(action.payload);
         }),
         createClientFailure:((state)=>{
             state.isFetching=false;
             state.error=true;
         }),

         //Delete Client
         deleteClientStart:((state)=>{
            state.isFetching=true;
         }),
         deleteClientSuccess:((state,action)=>{
             state.isFetching=true;
             state.currentClients.slice(
                state.currentClients.findIndex((item)=>item._id===action.payload),1);
         }),
         deleteClientFailure:((state)=>{
             state.isFetching=false;
             state.error=true;
         }),
        //update method can be implemented if needed

    }
})

export const {
    getClientStart,
    getClientSuccess,
    getClientFailure,
    createClientStart,
    createClientSuccess,
    createClientFailure,
    deleteClientStart,
    deleteClientSuccess,
    deleteClientFailure} =clientSlice.actions;

export default clientSlice.reducer;