import React from 'react'
import TodoItem from './TodoItem';


export default function Todos({ todos, getTodos }) {

    // let sortingTodos = [...todos]
    // sortingTodos = sortingTodos.reverse()

    return (
        todos.map((todo, i) => {
            return <TodoItem key={todo.id} index={i} getTodos={getTodos} todo={todo} />
        })

    )
}
