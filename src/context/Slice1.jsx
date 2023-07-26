import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list1: [],
    list2: [],
    list3: [],
    lastUpdated: 0
}

export const slice1 = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (action.payload.listNumber === 1) {
                state.list1 = [...action.payload.list]
                state.lastUpdated = 1
            }
            if (action.payload.listNumber === 2) {
                state.list2 = [...action.payload.list]
                state.lastUpdated = 2
            }
            if (action.payload.listNumber === 3) {
                state.list3 = [...action.payload.list]
                state.lastUpdated = 3
            }
        },
        remove: (state, action) => {
            if (action.payload.listNumber === 1) {
                state.list1 = [...action.payload.list]
                state.lastUpdated = 1
            }
            if (action.payload.listNumber === 2) {
                state.list2 = [...action.payload.list]
                state.lastUpdated = 2
            }
            if (action.payload.listNumber === 3) {
                state.list3 = [...action.payload.list]
                state.lastUpdated = 3
            }
            // rewrite above conditions dynamically

        },
        update: (state, action) => {
            if (action.payload.listNumber === 1) {
                state.list1 = [...action.payload.list]
                state.lastUpdated = 1
            }
            if (action.payload.listNumber === 2) {
                state.list2 = [...action.payload.list]
                state.lastUpdated = 2
            }
            if (action.payload.listNumber === 3) {
                state.list3 = [...action.payload.list]
                state.lastUpdated = 3
            }
        }
    },
})

export const { update } = slice1.actions
export default slice1.reducer