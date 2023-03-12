const initalstate = {
    sample: "Hi"
}

export const MyReducer = (state = initalstate, { type, actions }) => {
    switch (type) {
        default:
            return state;
    }
}