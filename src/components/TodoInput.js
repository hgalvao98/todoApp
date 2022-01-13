import React, { useRef } from 'react'

export default function TodoInput({ createTodo }) {

    const todoInput = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoInput.current.value === '') {
            alert('Please add a todo')
        }

        createTodo(todoInput.current.value);
        todoInput.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInput} required />
            <button type='submit'>Add</button>
        </form>
    )
}
