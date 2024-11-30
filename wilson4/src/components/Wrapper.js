import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
import './Wrapper.css'

const Wrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: true } : todo
        ));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, task, isEditing: false } : todo
        ));
    };

    return (
        <div className='Wrapper'>
            <h1>Todo List</h1>
            <Form addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <Edit
                        key={todo.id}
                        editTodo={editTask}
                        task={todo.task}
                        id={todo.id}
                    />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        startEdit={startEdit}
                    />
                )
            ))}
        </div>
    );
};

export default Wrapper;
