import { createStore, combineReducers } from "redux";
import { idReducer } from "./idReducer";
import { UserReducer } from "./userReducer";

const rootReducer = combineReducers({
    id: idReducer,
    user: UserReducer,
});

export const store = createStore(rootReducer);
