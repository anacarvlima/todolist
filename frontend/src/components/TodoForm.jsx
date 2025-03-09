import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return; 
        addTodo(value, category); 
        setValue(""); 
        setCategory(""); 
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma prioridade</option>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </select>
                <button type="submit">Adicionar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;