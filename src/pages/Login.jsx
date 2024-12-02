import React from "react";
import './ComponenteLogin.css'
import CadastrarProduto from "./CadastrarProduto";

const Login = () => {
  return (
    <div className="sas" style={{
        marginTop: '259px',
    }}>
      <h1>Fazer Login</h1>
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",  
          alignItems: "center",
        }}
      >
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email ou Número de Telefone" />
        <input type="text" placeholder="Senha" />
        <a className="botao" href="./CadastrarProduto" style={{
            margin: '20px',
            padding: '20px 180px',
            borderRadius: '5px',
            textDecoration: 'none',
            background: 'red',
            color: 'white',
        }}>Fazer login</a>
      </form> 
    </div>
  );
};

export default Login;
