import {createAction} from "@reduxjs/toolkit";
import {FILTER_TASKS} from "./type";

export const filterTasks = createAction(FILTER_TASKS);