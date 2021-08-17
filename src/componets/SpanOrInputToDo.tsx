import { useState } from 'react' 
import style from './ToDoList.module.css'
import { useDispatch } from 'react-redux'
import {updateInputAC} from '../Redux/reducers'



interface Prop {
  id: number,
  newToDoText: string,
  isEditing: boolean,
  useIsEditing(isEditing: boolean): void
}

export const SpanOrInputToDo: React.FC<Prop> = props => {
  
  const dispatch = useDispatch()

  const [flag, useFlag] = useState<boolean>(false)

  const LineThrough = (e: React.ChangeEvent<HTMLInputElement>) => {
    const flag = e.target.checked
    useFlag(flag)
  }

  const activeChange = () => {
    props.useIsEditing(true)
  }

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
