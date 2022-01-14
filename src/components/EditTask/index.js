import React, { useState, useRef, useEffect } from 'react'
import { Main } from './styles'
import axios from 'axios'
import Close from '@material-ui/icons/Close'

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

    // console.log(todo)

    return (
        <Main onClick={handleSubmit}>
            <button type="button" onClick={handleClose}><Close /></button>
            <input name="task" onChange={(e) => { setTask(e.target.value) }} type="text" label="Edit your new task" required />
            <button type='submit'>send</button>
        </Main >
    )
}
