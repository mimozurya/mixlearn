const defaultState = {
    id: 0,
};

export const idReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ID":
            return { ...state, id: state.id + action.payload };
        default:
            return state;
    }
};
