import { TodoContext } from './TodoContext';
import React from "react";

export const useTodo = () => React.useContext(TodoContext);