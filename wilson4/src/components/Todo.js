import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './Todo.css'

const Todo = ({ task, toggleComplete, deleteTodo, startEdit }) => {
    return (
        <div className='Todo-list'>
            <p
                onClick={() => toggleComplete(task.id)}
            // className={classNames({ completed: task.completed })}
            >
                {task.task}
            </p>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => startEdit(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    );
};

export default Todo;
