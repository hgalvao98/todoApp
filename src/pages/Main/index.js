import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Todos from '../../components/Todos';
// import Preload from './components/Preload';
import Header from '../../components/Header';
import TodoInput from '../../components/TodoInput';
import { Content } from './styles'
import EditTask from '../../components/EditTask';

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
    return (
        <Content>
            <Header />
            <TodoInput createTodo={createTodo} />
            <Todos todos={todos} getTodos={getTodos} />
        </Content>
    )
}
export default Main
