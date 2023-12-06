import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "macro-css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
    id: 0,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ID":
            return { ...state, id: state.id + action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
