import { useDispatch, useSelector } from 'react-redux'
import style from './ToDoList.module.css'
import {updateToDoAC} from './../Redux/reducers'

export const InputToDoList = () => {
  
  const dispatch = useDispatch()

  const newText = useSelector(state => state.todoList.newToDoText)

  const updateToDo = e => {
    const text = e.target.value
    dispatch(updateToDoAC(text))
  }

  return (
    <div className={style.form}>
      <input
        value={newText}
        onChange={updateToDo}
        className={style.inbut}
        placeholder='Enter some case'
      />
      <label>Enter some case</label>
    </div>
  )
}