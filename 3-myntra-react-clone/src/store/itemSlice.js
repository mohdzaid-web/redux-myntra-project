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