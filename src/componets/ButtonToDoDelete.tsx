import { useDispatch } from 'react-redux'
import style from './ToDoList.module.css'
import {deleteToDoAC} from '../Redux/reducers'

interface Prop {
  id: number
}

export const ButtonToDoDelete: React.FC<Prop> = props => {
  
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
