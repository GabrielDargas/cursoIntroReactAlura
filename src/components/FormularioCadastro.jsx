import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(){
    super()
    this.titulo = ""
  }
  
  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value
    console.log(this.titulo)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Titulo"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
