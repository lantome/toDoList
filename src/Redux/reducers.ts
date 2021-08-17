import {todoList} from './../types/types'
import {todoListAction} from './../types/types'
import {TodoActionTypes} from './../types/types'

const initialState: todoList  = {
  toDo: [],
  newToDoText: '',
}

const storeReducer = (state = initialState, action: todoListAction): todoList => {
  switch (action.type) {
    case TodoActionTypes.UPDATA_ADD_TODO:
      return { ...state, newToDoText: action.payload }
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        toDo: [
          ...state.toDo,
          { id: state.toDo.length, flag: false, text: state.newToDoText },
        ],
        newToDoText: '',
      }
    case TodoActionTypes.UPDATE_INPUT:
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
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        toDo: state.toDo.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}

export default storeReducer

export const updateToDoAC = (value: string) => {
  return {
    type: TodoActionTypes.UPDATA_ADD_TODO,
    payload: value,
  }
}

export const addToDoAC = () => {
  return {
    type: TodoActionTypes.ADD_TODO,
  }
}

export const updateInputAC = (value: {todoId: number, text: string}) => {
  return {
    type: TodoActionTypes.UPDATE_INPUT,
    payload: value,
  }
}

export const deleteToDoAC = (value: number) => {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: value,
  }
}
