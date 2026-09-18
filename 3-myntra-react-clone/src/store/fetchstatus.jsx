// import { createSlice} from "@reduxjs/toolkit"

// const fatchstatusslice =  createSlice({
//     name:'fetchstatus',
//     initialState:{
//         fetchdone:false,
//         currentlyfetching:false
//     },
//     reducers:{
//         markfetchdone:(state)=>{
//              state.fetchdone = true
//         },
//          markfatchingstarted:(state)=>{
//              state.currentlyfetching = true
//         },
//          markfatchingfinished:(state)=>{
//              state.currentlyfetching = false
//         },
//     }
// })
// export const fetchedAction = fatchstatusslice.actions
// export default fatchstatusslice


import { createSlice } from "@reduxjs/toolkit";

const fatchstatusslice = createSlice({
  name: "fetchstatus",

  initialState: {
    fetchdone: false,
    currentlyfetching: false,
  },

  reducers: {
    markfetchdone: (state) => {
      state.fetchdone = true;
    },

    markfatchingstarted: (state) => {
      state.currentlyfetching = true;
    },

    markfatchingfinished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchedAction = fatchstatusslice.actions;

export default fatchstatusslice;