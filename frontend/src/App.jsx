import { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Login from './components/Login';
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email, password) => {
    // Dados de usuário válidos (simulação)
    const validUser = {
      email: 'usuario@exemplo.com',
      password: 'senha123',
    };
  
    // Verifica se o e-mail e a senha correspondem
    if (email === validUser.email && password === validUser.password) {
      setIsLoggedIn(true); // Define o estado de login como verdadeiro
      //localStorage.setItem('isLoggedIn', 'true');
      alert('Login bem-sucedido!'); // Feedback para o usuário
    } else {
      alert('E-mail ou senha incorretos.'); // Feedback para o usuário
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    //localStorage.removeItem('isLoggedIn');
    alert('Logout realizado com sucesso!');
  };



  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          <h1>Lista de tarefas</h1>
          <div className="todo-list">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
          <TodoForm addTodo={addTodo} />
        </>
      )}
    </div>
  );
}

export default App
