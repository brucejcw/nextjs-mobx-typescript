export const init = (self: any, initialState: any) => {
    for (const k in initialState) {
        if (Object.prototype.hasOwnProperty.call(initialState, k)) {
            self[k] = initialState[k]
        }
    }
}
