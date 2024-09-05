import React from 'react';
import './styles.css';

import TodoItem from './TodoItem/index';

interface TodoItemObj {
    id: number,
    title: string
}

interface TodoProps {
    items: TodoItemObj[]
}


const Todo: React.FC<TodoProps> = (props) => {
    return (
        <div className='todo-container'>
                {props.items.map((item) => (
                    <TodoItem key={item.id} id={item.id} title={item.title} />
                ))}
        </div>
    )
}

export default Todo;
