import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function TodoItem({ todo, getTodos }) {

    const deleteTodo = async () => {
        await axios.delete(`http://localhost:5000/${todo.id}`)

        getTodos();
    }

    const Teste = styled.div`
        background-color:red;
        height:100px;
        width:100px;
        border-radius:15px;
        margin:10px;
        h1{
            color:white;
        }
    `

    return (
        <div>
            <h1>{todo.message}</h1>
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}
