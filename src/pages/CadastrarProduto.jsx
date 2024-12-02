import React from 'react'
import './ComponenteCadastrarProduto.css'

const CadastrarProduto = () => {
  return (
    <div className="sas" style={{
      marginTop: '259px',
  }}>
    <h1>Cadastrar Produto</h1>
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
      <input type="text" placeholder="Preço" />
      <input type="text" placeholder="Categoria" />
      <a className="botao" href="./" style={{
          margin: '20px',
          padding: '20px 155px',
          borderRadius: '5px',
          textDecoration: 'none',
          background: 'red',
          color: 'white',
      }}>Cadastrar Produto</a>
    </form> 
  </div>
  )
}

export default CadastrarProduto
