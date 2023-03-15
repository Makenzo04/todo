import React from 'react';
import { useTodo } from '../utils';

export const Header:React.FC = () => {
    const {todos} = useTodo();
    return (
    <div>You have {todos.length} tasks today!</div>
    )
}