
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_AMOUNT":
            return { ...state, count: state.count + 1000 };
        case "DECREMENT_AMOUNT":
            return { ...state, count: state.count - 1000 };
        case "RESET_AMOUNT":
            return { ...state, count: 0 };
        case "INCREMENT_BY_VALUE":
            return { ...state, count: state.count + action.payload };
        case "DECREMENT_BY_VALUE":
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }

}

export default reducer
