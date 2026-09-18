// import { createSlice} from "@reduxjs/toolkit"

// const itemslice =  createSlice({
//     name:'items',
//     initialState:[],
//     reducers:{
//         addinitialitem:(state,action)=>{
//             return action.payload
//         }
//     }
// })
// export const itemsAction = itemslice.actions
// export default itemslice

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one


import { createSlice } from "@reduxjs/toolkit";

const itemslice = createSlice({
  name: "items",

  initialState: [],

  reducers: {
    addinitialitem: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsAction = itemslice.actions;

export default itemslice;