import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Criar funcionalidade X no sistema",
      "category": "Alta",
      "isCompleted": false
    },
    {
      "id": 2,
      "text": "Ir para a academia",
      "category": "Média",
      "isCompleted": false
    },
    {
      "id": 3,
      "text": "Estudar React",
      "category": "Baixa",
      "isCompleted": false
    }
  ]
  )
  
  const addTodo = (text, category) =>{
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ]

    setTodos(newTodos)


  }

  return  (
    <div className = "app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
           // Elementos que se repetem necessitam de uma key
          <Todo key = {todo.id} todo={todo}/> 
        ))}
      </div>
      <TodoForm addTodo ={addTodo} />
    </div>
  )
}

export default App
