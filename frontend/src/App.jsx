import { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Login from './components/Login';
import Register from './components/Register';
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
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (email, password) => {
    const validUser = { email: 'usuario@exemplo.com', password: 'senha123' };
    if (email === validUser.email && password === validUser.password) {
      setIsLoggedIn(true);
      alert('Login bem-sucedido!');
    } else {
      alert('E-mail ou senha incorretos.');
    }
  };

  const handleRegister = (name, email, password) => {
    console.log(`Usuário cadastrado: Nome: ${name}, Email: ${email}`);
    setIsRegistering(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logout realizado com sucesso!');
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        isRegistering ? (
          <>
            <Register onRegister={handleRegister} />
            <p>Já tem uma conta? <button onClick={() => setIsRegistering(false)}>Faça login</button></p>
          </>
        ) : (
          <>
            <Login onLogin={handleLogin} />
            <p>Não tem uma conta? <button onClick={() => setIsRegistering(true)}>Cadastre-se</button></p>
          </>
        )
      ) : (
        <>
          <button onClick={handleLogout} className="logout-button">Logout</button>
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
