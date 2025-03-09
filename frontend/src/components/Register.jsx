import React, { useState } from "react";
import "./Register.css";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !sex || !age) return;
    console.log("Nome:", name, "Email:", email, "Senha:", password, "Sexo:", sex, "Idade:", age);
    onRegister(name, email, password, sex, age);
    setName("");
    setEmail("");
    setPassword("");
    setSex("");
    setAge("");
  };

  return (
    <div className="register-form">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <input
          type="text"
          placeholder="Digite seu sexo"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
/>
        <input
          type="number"
          placeholder="Digite sua idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;