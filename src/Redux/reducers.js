const UPDATA_ADD_TODO = 'UPDATA_ADD_TODO'
const ADD_TODO = 'ADD_TODO'
const UPDATE_INPUT = 'UPDATE_INPUT'
const DELETE_TODO = 'DELETE_TODO'

const initialState = {
  toDo: [],
  newToDoText: '',
}

export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATA_ADD_TODO:
      return { ...state, newToDoText: action.text }
    case ADD_TODO:
      return {
        ...state,
        toDo: [
          ...state.toDo,
          { id: state.toDo.length, flag: false, text: state.newToDoText },
        ],
        newToDoText: '',
      }
    case UPDATE_INPUT:
      return {
        ...state,
        toDo: state.toDo.map(item => {
          if (item.id === action.payload.todoId) {
            return {
              id: action.payload.todoId,
              flag: item.flag,
              text: action.payload.text,
            }
          }
          return item
        }),
      }
    case DELETE_TODO:
      return {
        ...state,
        toDo: state.toDo.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}

export const updateToDoAC = value => {
  return {
    type: UPDATA_ADD_TODO,
    text: value,
  }
}

export const addToDoAC = () => {
  return {
    type: ADD_TODO,
  }
}

export const updateInputAC = value => {
  return {
    type: UPDATE_INPUT,
    payload: value,
  }
}

export const deleteToDoAC = value => {
  return {
    type: DELETE_TODO,
    payload: value,
  }
}
