export enum TodoActionTypes {
    UPDATA_ADD_TODO = 'UPDATA_ADD_TODO',
    ADD_TODO = 'ADD_TODO',
    UPDATE_INPUT = 'UPDATE_INPUT',
    DELETE_TODO = 'DELETE_TODO'
    }
    
    interface UpdataAddToDoAction {
      type: TodoActionTypes.UPDATA_ADD_TODO;
      payload: string
    }
    
    interface AddToDoAction {
      type: TodoActionTypes.ADD_TODO;
    }
    
    interface UpdataInputToDoAction {
      type: TodoActionTypes.UPDATE_INPUT;
      payload: {todoId: number, text: string}
    }
    
    interface DeleteToDoAction {
      type: TodoActionTypes.DELETE_TODO;
      payload: number
    }
    
    export type todoListAction  = UpdataAddToDoAction | AddToDoAction | UpdataInputToDoAction | DeleteToDoAction
    
    
    export interface todoList {
      toDo: any[];
      newToDoText: string;
    }
    
    