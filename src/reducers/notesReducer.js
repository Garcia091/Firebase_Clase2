import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            console.log(action.payload)
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                notes: state.notes.map(
                    notes => notes.id === action.payload.id
                        ? action.payload.notes
                        : notes
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(notes => notes.id !== action.payload)
            }

        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }

            case types.notesLogoutClean:
                return {
                    ...state,
                    active: null,
                    notes:[]
                }
        default:
            return state;
    }
}

