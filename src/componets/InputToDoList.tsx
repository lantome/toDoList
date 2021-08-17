import { useDispatch } from 'react-redux'
import style from './ToDoList.module.css'
import {updateToDoAC} from '../Redux/reducers'
import React from 'react'
import {UseTypedSelector} from './hooks/UseTypedSelector'


export const InputToDoList = () => {
  
  const dispatch = useDispatch()

  const newText = UseTypedSelector(state => state.todoList.newToDoText)

  const updateToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
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