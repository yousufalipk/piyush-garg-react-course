import React from 'react';
import './styles.css';

interface TodoItemProps {
    id?: number,
    title: string
}


const TodoItem: React.FC<TodoItemProps> = (props) => {
    return (
        <li>{props.title}</li>
    )
}

export default TodoItem;
