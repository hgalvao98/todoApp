import React from 'react'
import TodoItem from '../TodoItem';

export default function Todos({ todos, getTodos, move }) {

    let sortingTodos = [...todos]
    sortingTodos = sortingTodos.reverse()


    return (
        sortingTodos.map((todo, index) => {
            return <TodoItem key={todo.id} getTodos={getTodos} index={index} todo={todo} move={move} />
        })

    )
}
