import { combineReducers } from "@reduxjs/toolkit";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>