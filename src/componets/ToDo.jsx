import style from './ToDoList.module.css' 
import React from 'react'
import { useState } from 'react' 
import {SpanOrInputToDo} from './SpanOrInputToDo'
import {ButtonToDoDelete} from './ButtonToDoDelete'
import {ButtonToDoCorrect} from './ButtonToDoCorrect'


const ToDo = (props) => {
  const [isEditing, useIsEditing] = useState(false)


  return (
    <div className={style.text}>
      <div>
        <SpanOrInputToDo useIsEditing={useIsEditing} isEditing={isEditing} newToDoText = {props.newToDoText} id={props.id} />
      </div>
      <div className={style.buttons}>
        <ButtonToDoCorrect useIsEditing={useIsEditing} isEditing={isEditing} id={props.id} newToDoText = {props.newToDoText} />
        &nbsp;
        <ButtonToDoDelete id={props.id}/>
      </div>
    </div>
  )
}

  export default ToDo