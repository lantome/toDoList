import style from './ToDoList.module.css'
import {InputToDoList} from './InputToDoList'
import { useSelector } from 'react-redux'
import {ButtonAddToDo} from './ButtonAddToDo'
import ToDo from './ToDo'


const ToDoList = () => {
  const toDo = useSelector(state => state.todoList.toDo)

  return (
    <div className={style.wrapper}>
      <h1>ToDoList</h1>
      <div className={style.wrapperForm}>
        <InputToDoList />
        &nbsp;
        <ButtonAddToDo />
      </div>
      <div>
        {toDo.map(e => (
          <ToDo key={e.id} newToDoText={e.text} id={e.id} />
        ))}
      </div>
    </div>
  )
}

export default ToDoList