import {useState} from 'react'

const TodoForm = (addTodo) => {
    const [value,setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        console.log(value, category)
        addTodo(value, category)
        setValue("")
        setCategory("")
        // Limpar campos
    }

  return <div className='todo-form'>
    <h2>Criar tarefa:</h2>
    <form oneSubmit = {handleSubmit}>
        <input 
        type="text" 
        placeholder = "Digite o título" 
        value = {value}
        onChange={(e) => setValue(e.target.value)}
        />
        <select value = {category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma prioridade</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
        </select>
        <button type="submit">Criar tarefa </button>
    </form>
</div>
}

export default TodoForm