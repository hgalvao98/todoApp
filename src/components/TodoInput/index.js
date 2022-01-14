import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { Form } from './styles'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'

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
        <Form onSubmit={handleSubmit}>
            <TextField InputLabelProps={{
                style: {
                    color: 'white'
                }
            }} InputProps={{ style: { color: 'white' } }} type="text" label="Enter your new task" inputRef={todoInput} required />
            <button variant="outlined" type='submit'>
                <AddCircleOutline style={{ color: 'white' }} />
            </button>
        </Form>
    )
}
