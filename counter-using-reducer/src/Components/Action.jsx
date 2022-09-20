export const increment_amount = { type: "INCREMENT_AMOUNT" }
export const decrement_amount = { type: "DECREMENT_AMOUNT" }
export const reset_amount = { type: "RESET_AMOUNT" }

export const incrementByValue = (value) => {
    return {
        type: "INCREMENT_BY_VALUE",
        payload: value
    }
}

export const decrementByValue = (value) => {
    return {
        type: "DECREMENT_BY_VALUE",
        payload: value
    }
}