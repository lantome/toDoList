import { useDispatch } from 'react-redux'
import style from './ToDoList.module.css'
import {updateInputAC} from './../Redux/reducers'

export const ButtonToDoCorrect = props => {

  const dispatch = useDispatch()

  const DeactiveChange = () => {
    props.useIsEditing(false)
    dispatch(updateInputAC({ todoId: props.id, text: props.newToDoText }))
  }

  const Change = () => {
    props.useIsEditing(!props.isEditing)
  }

  return (
    <>
      {props.isEditing
       ? (<button onClick={DeactiveChange} className={style.push}>&#10004;</button>)
       : (<button onClick={Change} className={style.push}>&#9998;</button>)
       }
    </>
  )
}
