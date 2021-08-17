import style from './ToDoList.module.css' 
import React from 'react'
import {SpanOrInputToDo} from './SpanOrInputToDo'
import {ButtonToDoDelete} from './ButtonToDoDelete'
import {ButtonToDoCorrect} from './ButtonToDoCorrect'


interface Prop {
  id: number,
  newToDoText: string,
  isEditing: boolean,
  useIsEditing(isEditing: boolean): void
}


const ToDo: React.FC<Prop> = (props) => {
  


  return (
    <div className={style.text}>
      <div>
        <SpanOrInputToDo useIsEditing={props.useIsEditing} isEditing={props.isEditing} newToDoText = {props.newToDoText} id={props.id} />
      </div>
      <div className={style.buttons}>
        <ButtonToDoCorrect useIsEditing={props.useIsEditing} isEditing={props.isEditing} id={props.id} newToDoText = {props.newToDoText} />
        &nbsp;
        <ButtonToDoDelete id={props.id}/>
      </div>
    </div>
  )
}

  export default ToDo