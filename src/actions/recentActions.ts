


export const appendRecent (id) => {
    return {
        type: "APPEND_RECENT",
        payload: {
            id
        }
    }
}