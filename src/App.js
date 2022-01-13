import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todos from './components/Todos';
// import Preload from './components/Preload';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

function App() {

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

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      console.log('not dropped in droppable')
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    const itemCopy = { ...todos[source.droppableId].message[source.index] }

    setTodos(prev => {
      prev = { ...prev }
      prev[source.droppableId].message.splice(source.index, 1)

      prev[destination.droppableId].message.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  return (
    <div className="App">
      <Header />
      <TodoInput createTodo={createTodo} />
      <DragDropContext onDragEnd={handleDragEnd}>
        {todos.map((todo, key) => {
          return (
            <div key={key}>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >

                      <Draggable key={todo.id} index={key} draggableId={todo.id}>
                        {(provided) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <h1>{todo.message}</h1>
                              <button>X</button>
                            </div>
                          )
                        }}
                        {/* <h1>{todo.message}</h1>
                            <button onClick={deleteTodo}>X</button> */}
                      </Draggable>
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div >
  );
}


export default App;
