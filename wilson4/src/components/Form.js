import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value.trim());
            setValue("");
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input'
                value={value} 
                placeholder='What is the task today?' 
                onChange={(e) => setValue(e.target.value)}
                aria-label="Todo item input"
            />
            <button type='submit' className='todo-btn'>
                Add Task
            </button>
        </form>
    );
};

export default Form;
