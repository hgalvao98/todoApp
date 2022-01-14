import React from 'react'
import TodoItem from '../TodoItem';


export default function Todos({ todos, getTodos }) {

    let sortingTodos = [...todos]
    sortingTodos = sortingTodos.reverse()

    return (
        sortingTodos.map((todo) => {
            return <TodoItem key={todo.id} getTodos={getTodos} todo={todo} />
        })

    )
}
