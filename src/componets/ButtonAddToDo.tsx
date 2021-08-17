import { useDispatch } from 'react-redux'
import style from './ToDoList.module.css'
import {addToDoAC} from '../Redux/reducers'
import {UseTypedSelector} from './hooks/UseTypedSelector'

export const ButtonAddToDo = () => {
  
  const dispatch = useDispatch()

  const newText = UseTypedSelector(state => state.todoList.newToDoText)

  const addToDo = () => {
    if (newText === '') {
      return
    }
    return dispatch(addToDoAC())
  }

  return (
    <div className={style.fromButton}>
      <button onClick={addToDo} className={style.butin}>
        <span>Send</span>
      </button>
    </div>
  )
}
