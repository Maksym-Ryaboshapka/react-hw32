import {createReducer} from "@reduxjs/toolkit";
import {filterTasks} from "./action";

const initialState = "";

const filterReducer = createReducer(initialState, builder => {
  builder.addCase(filterTasks, (state, action) => {
    return action.payload;
  });
});

export default filterReducer;