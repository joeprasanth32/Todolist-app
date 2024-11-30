import React, { useState } from 'react';
import './Edit.css'
const Edit = ({ editTodo, task, id }) => {
    const [newTask, setNewTask] = useState(task);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            editTodo(newTask.trim(), id);
        } else {
            console.error("Task cannot be empty");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleChange} aria-label="Edit todo item" />
            <button type="submit">Save</button>
        </form>
    );
};

export default Edit;
