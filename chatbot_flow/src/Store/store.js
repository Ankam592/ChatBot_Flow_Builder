import React from "react";
import reducer from "./NodeSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({

        reducer :{
             node: reducer       // node is the key in useSelector  eg: state.node
            } // list of reducers to be added
})

export default store;   