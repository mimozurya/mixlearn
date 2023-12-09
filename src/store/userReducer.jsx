const defaultState = {
    username: "",
    name: "",
    password: "",
    category: "",
    avatar: "",
};

export const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_USERNAME":
            return { ...state, username: state.username + action.payload };
        case "ADD_NAME":
            return { ...state, name: state.name + action.payload };
        case "ADD_PASSWORD":
            return { ...state, password: state.password + action.payload };
        case "ADD_CATEGORY":
            return { ...state, category: state.category + action.payload };
        case "ADD_AVATAR":
            return { ...state, avatar: state.avatar + action.payload };
        default:
            return state;
    }
};
