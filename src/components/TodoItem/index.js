import React, { useState } from 'react'
import axios from 'axios'
import { Main, TaskCompleted, Buttons, TaskIncomplete } from './styles'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import EditTask from '../EditTask'


export default function TodoItem({ todo, getTodos }) {

    const [completed, setCompleted] = useState(false)
    const [open, setOpen] = useState(false)

    const deleteTodo = async () => {
        await axios.delete(`http://localhost:5000/${todo.id}`)

        getTodos();
    }

    const handleComplete = () => {
        setCompleted(!completed)
    }

    const showChange = () => {
        if (completed === false) {
            return <TaskIncomplete>{todo.message}</TaskIncomplete>
        } else {
            return <TaskCompleted>{todo.message}</TaskCompleted>
        }
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    const openModal = () => {
        if (open === true) {
            return <EditTask todo={todo} getTodos={getTodos} handleOpen={handleOpen} />
        } else {
            return
        }
    }

    return (
        <Main onClick={handleComplete}>
            {showChange()}
            {openModal()}
            <Buttons>
                <button onClick={handleOpen}><Edit style={{ color: 'white' }} /></button>
                <button onClick={deleteTodo}><DeleteForever style={{ color: 'white' }} /></button>
            </Buttons>
        </Main>
    )
}
