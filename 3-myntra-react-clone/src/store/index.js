// import {configureStore} from "@reduxjs/toolkit"
// import itemslice from "./itemSlice"
// import fatchstatusslice from "./fetchstatus"
// import bagslice from "./bagslice"


// const mintrastore = configureStore({
//     reducer:{
//         items:itemslice.reducer,
//         fetchstatus: fatchstatusslice.reducer,
//         bag:bagslice.reducer
//     }
// })
// export default mintrastore


import { configureStore } from "@reduxjs/toolkit";

import itemslice from "./itemSlice";
import fatchstatusslice from "./fetchstatus";
import bagslice from "./bagslice";

const mintrastore = configureStore({
  reducer: {
    items: itemslice.reducer,
    fetchstatus: fatchstatusslice.reducer,
    bag: bagslice.reducer,
  },
});

export default mintrastore;