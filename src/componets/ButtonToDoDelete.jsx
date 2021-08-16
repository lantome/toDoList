import { useDispatch } from 'react-redux'
import style from './ToDoList.module.css'
import {deleteToDoAC} from './../Redux/reducers'

export const ButtonToDoDelete = props => {
  
  const dispatch = useDispatch()

  const deleteToDo = () => {
    dispatch(deleteToDoAC(props.id))
  }

  return (
    <>
      <button onClick={deleteToDo} className={style.push}>
        &#10008;
      </button>
    </>
  )
}
