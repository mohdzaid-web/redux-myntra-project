// import { createSlice} from "@reduxjs/toolkit"

// const bagslice =  createSlice({
//     name:'bag',
//     initialState:[],
//     reducers:{
//         addtobag:(state,action)=>{
//        state.push(action.payload)
//         },
//          removefrombag:(state,action)=>{
//          return  state.filter(itemid=> itemid !== action.payload)
//         }
//     }
// })
// export const bagAction = bagslice.actions
// export default bagslice




import { createSlice } from "@reduxjs/toolkit";

const bagslice = createSlice({
  name: "bag",

  initialState: [],

  reducers: {
    addtobag: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },

    removefrombag: (state, action) => {
      return state.filter(
        (itemid) => itemid !== action.payload
      );
    },
  },
});

export const bagAction = bagslice.actions;

export default bagslice;