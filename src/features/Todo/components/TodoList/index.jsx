import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    };
    return (
        <ul className='Todo-List'>
            {todoList.map((todo, idx) => (
                <li className={classnames({
                    completed: todo.status === 'completed'
                })}
                    key={todo.id}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;