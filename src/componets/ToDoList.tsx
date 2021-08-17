import style from './ToDoList.module.css'
import {InputToDoList} from './InputToDoList'
import { useState } from 'react' 
import {ButtonAddToDo} from './ButtonAddToDo'
import ToDo from './ToDo'
import {UseTypedSelector} from './hooks/UseTypedSelector'




const ToDoList: React.FC = () => {
  const toDo = UseTypedSelector(state => state.todoList.toDo)
  const [isEditing, useIsEditing] = useState<boolean>(false)

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
          <ToDo key={e.id} newToDoText={e.text} id={e.id} isEditing={isEditing} useIsEditing={useIsEditing} />
        ))}
      </div>
    </div>
  )
}

export default ToDoList