import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Main, TaskCompleted, Buttons, TaskIncomplete } from './styles'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import EditTask from '../EditTask'
import Check from '@material-ui/icons/Check'
import { useDrag, useDrop } from 'react-dnd'


export default function TodoItem({ todo, getTodos, index, move }) {

    const ref = useRef();


    const [{ isDragging }, dragRef] = useDrag({
        type: "CARD",
        index,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex) {
                return
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return
            }

            move(draggedIndex, targetIndex);
            item.index = targetIndex;
        }
    })


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
    };

    dragRef(dropRef(ref));

    return (
        <Main ref={ref} isDragging={isDragging}>
            {showChange()}
            {openModal()}
            <Buttons>
                <button onClick={handleComplete}><Check style={{ color: 'white' }} /></button>
                <button onClick={handleOpen}><Edit style={{ color: 'white' }} /></button>
                <button onClick={deleteTodo}><DeleteForever style={{ color: 'white' }} /></button>
            </Buttons>
        </Main>
    )
}
