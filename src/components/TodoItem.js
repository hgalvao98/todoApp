import React from 'react'
import axios from 'axios'
import { Draggable } from 'react-beautiful-dnd';

export default function TodoItem({ todo, getTodos, i }) {

    const deleteTodo = async () => {
        await axios.delete(`http://localhost:5000/${todo.id}`)

        getTodos();
    }

    return (
        <Draggable key={todo.id} index={todo[i]} draggableId={todo.id}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {todo.message}
                    </div>
                )
            }}
            {/* <h1>{todo.message}</h1>
            <button onClick={deleteTodo}>X</button> */}
        </Draggable>
    )
}
