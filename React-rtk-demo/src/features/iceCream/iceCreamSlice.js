import {createSlice} from "@reduxjs/toolkit"

const initialState={
    noOfIceCreams:15,
}
const iceCreamSlice=createSlice({
    name:'iceCream',
     initialState,
     reducers:{
        ordered:state=>{
            state.noOfIceCreams--
        },
        restocked:(state,action)=>{
            state.noOfIceCreams +=action.payload
        },
         },
})


export default iceCreamSlice.reducer
export const {ordered,restocked}=iceCreamSlice.actions