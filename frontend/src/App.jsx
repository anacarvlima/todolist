import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Filter from "./components/Filter.jsx";
import Search from "./components/Search.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
  const REACT_APP_API_URL = "http://localhost:5555";

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Andar de bicicleta",
      category: "Alta",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Brincar de boneca",
      category: "Média",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Cantar",
      category: "Baixa",
      isCompleted: false,
    },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [token, setToken] = useState(null);

  const [filter, setFilter] = useState("All"); 
  const [sort, setSort] = useState("Asc"); 
  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    try {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleLogin = (email, password) => {  
    if (email === "cecilia@teste.com" && password === "123456") {
      setIsLoggedIn(true);
      alert("Login bem-sucedido!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  const handleRegister = async (name, email, password, sex, age) => {
    if (!name || !email || !password || !sex || !age) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    if (
      name === "Ana Cecília" &&
      email === "cecilia@teste.com" &&
      password === "123456" &&
      sex === "Feminino" &&
      age === "19"
    ) {
      setIsRegistering(true); 
      alert("Cadastro bem-sucedido!");
    } else {
      alert("Erro ao realizar o cadastro.");
    }
  };
  const handleEditProfile = () => {
    alert("Editar Perfil clicado!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    alert("Logout realizado com sucesso!");
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "Completed") return todo.isCompleted;
      if (filter === "Incomplete") return !todo.isCompleted;
      return true; 
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "Asc") return a.text.localeCompare(b.text);
      if (sort === "Desc") return b.text.localeCompare(a.text);
      return 0;
    });

    return (
      <div className="app">
        {!isLoggedIn ? (
          isRegistering ? (
            <>
              <Register onRegister={handleRegister} />
              <p>
                Já tem uma conta?{" "}
                <button onClick={() => setIsRegistering(false)}>Faça login</button>
              </p>
            </>
          ) : (
            <>
              <Login onLogin={handleLogin} />
              <p>
                Não tem uma conta?{" "}
                <button onClick={() => setIsRegistering(true)}>Cadastre-se</button>
              </p>
            </>
          )
        ) : (
          <>
            <h1>Lista de tarefas</h1>
            <Search search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
            <div className="todo-list">
              {filteredTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  editTodo={editTodo}
                />
              ))}
            </div>
            <TodoForm addTodo={addTodo} />
            <div className="button-container">
              <button onClick={handleEditProfile}>Editar Perfil</button>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

export default App;