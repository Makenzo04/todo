import React from "react";
import { useTodo } from "../../utils";
import { TodoPanel } from "../TodoPanel/TodoPanel";
import { TodoItem } from "./TodoItem/TodoItem";



export const TodoList: React.FC = () => {
        const {todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit} = useTodo();
        return (
        <div>
            {todos.map((todo) => {
                if(todo.id === todoIdForEdit) return <TodoPanel mode='edit' editTodo={{name:todo.name, 
                    description: todo.description}}/>;

                return (
                    <TodoItem todo={todo} 
                    checkTodo={checkTodo} 
                    deleteTodo={deleteTodo} 
                    selectTodoIdForEdit={selectTodoIdForEdit}/>
                );
            })}
        </div>
        );
    };