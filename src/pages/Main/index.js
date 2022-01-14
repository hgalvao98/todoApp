import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Todos from '../../components/Todos';
import Header from '../../components/Header';
import TodoInput from '../../components/TodoInput';
import { Content } from './styles'


function Main() {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const res = await axios.get("http://localhost:5000");
        setTodos(res.data);

    }

    useEffect(() => {
        getTodos()
    }, [])

    const createTodo = async (text) => {
        const res = await axios.post("http://localhost:5000", { message: text });
        setTodos(res.data)
    }

    function onDragEnd(from, to) {
        const newTodos = [...todos];
        const [removed] = newTodos.splice(from, 1);
        newTodos.splice(to, 0, removed);
        setTodos(newTodos)
    }


    return (
        <Content>
            <Header />
            <TodoInput createTodo={createTodo} />
            <Todos todos={todos} getTodos={getTodos} move={onDragEnd} />
        </Content>
    )
}
export default Main
