import { configureStore } from "@reduxjs/toolkit";

import itemReducer from "./items/reducers";

export default configureStore({

 reducer: {

   items: itemReducer,

 },

});