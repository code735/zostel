const initalstate = {
    sample: "Hi"
}

export const MyReducer = (state = initalstate, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}