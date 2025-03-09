import React from "react";
import "./Todo.css"; 

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const handleEdit = () => {
    const newText = prompt("Editar tarefa:", todo.text); 
    if (newText && newText.trim() !== "") {
      editTodo(todo.id, newText); 
    } else {
      alert("O texto da tarefa não pode estar vazio!"); 
    }
  };

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      <div className="content">
        <p style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
          {todo.text}
        </p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="button-container">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="edit" onClick={handleEdit}>
          Editar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Todo;