import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'study',
            status: 'new'
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'eat',
            status: 'new'
        }
    ];
    const [todoList, settodoList] = useState(inittodoList);
    const handleTodoClick = (todo, idx) => {
        const newtodoList = [...todoList];
        const stt = newtodoList[idx].status === 'new' ? 'completed' : 'new';
        newtodoList[idx].status = stt;
        console.log(todo);
        settodoList(newtodoList);
    };
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}></TodoList>
        </div>
    );
}

export default TodoFeature;