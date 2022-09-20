
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_AMOUNT":
            return state + 1000;
        case "DECREMENT_AMOUNT":
            return state - 500;
        case "RESET_AMOUNT":
            return 0;
        default:
            return state;
    }

}

export default reducer
