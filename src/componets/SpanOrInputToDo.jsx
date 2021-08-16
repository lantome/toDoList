import { useState } from 'react' 
import style from './ToDoList.module.css'
import { useDispatch } from 'react-redux'
import {updateInputAC} from './../Redux/reducers'




export const SpanOrInputToDo = props => {
  
  const dispatch = useDispatch()

  const [flag, useFlag] = useState(false)

  const LineThrough = e => {
    const flag = e.target.checked
    useFlag(flag)
  }

  const activeChange = () => {
    props.useIsEditing(true)
  }

  const handlerInput = e => {
    const text = e.target.value
    dispatch(updateInputAC({ todoId: props.id, text: text }))
  }

  return (
    <>
      <input onChange={LineThrough} type='checkbox' />
      &nbsp;
      {props.isEditing 
      ? (<input
          autoFocus={true}
          onChange={handlerInput}
          value={props.newToDoText}
        />)
      : (<span
          className={flag ? style.textDecoration : null}
          onClick={activeChange}>
            {props.newToDoText}
        </span>)
        }
    </>
  )
}
