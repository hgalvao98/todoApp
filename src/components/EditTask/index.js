import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Close from '@material-ui/icons/Close'
import { Main } from './styles'
import { Button, TextField } from '@material-ui/core'

export default function EditTask({ todo, getTodos, handleOpen }) {

    const [task, setTask] = useState('')
    const [id, setId] = useState()
    const [date, setDate] = useState()

    const settingInfo = () => {
        setTask(todo.message)
        setId(todo.id)
        setDate(todo.date)
    }

    useEffect(() => {
        settingInfo()
    }, [])


    const editTodo = () => {
        axios.put(`http://localhost:5000/${todo.id}`, {
            message: task,
            id: id,
            created: date
        })

        getTodos();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo()
    }

    const handleClose = () => {
        handleOpen(false)
    }

    return (
        <Main onClick={handleSubmit}>
            <TextField InputLabelProps={{
                style: {
                    color: 'white'
                }
            }} InputProps={{ style: { color: 'white' } }} name="task" onChange={(e) => { setTask(e.target.value) }} type="text" label="Edit your task" required />
            <Button variant="contained" size="small" type='submit' style={{ color: 'white' }}>Edit</Button>
            <Button variant="contained" size="small" type="button" onClick={handleClose}><Close style={{ color: 'white' }} /></Button>
        </Main >
    )
}
