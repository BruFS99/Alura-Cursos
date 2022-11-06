import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

  const [nome, setNome] = useState('')

  const [cargo, setCargo] = useState('')

  const [imagem, setImagem] = useState('')

  const [setor, setSetor] = useState('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      setor
    })

    setNome('')
    setCargo('')
    setImagem('')
    setSetor('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
      placeholder="Digite seu nome"
      valor={nome}
      aoAlterado={valor => setNome(valor)}
      />
      <CampoTexto 
      obrigatorio={true} 
      label="Cargo" 
      placeholder="Digite seu Cargo"
      valor={cargo}
      aoAlterado={valor => setCargo(valor)}
      />
      <CampoTexto 
      label="Imagem" 
      placeholder="Digite o endereço da sua imagem"
      valor={imagem}
      aoAlterado={valor => setImagem(valor)}
      />
      <ListaSuspensa 
      defaultValue="Selecionar" 
      obrigatorio={true} 
      label="Setor" 
      itens={props.setor}
      valor={setor}
      aoAlterado={valor => setSetor(valor)}

      />
      <Botao>Criar Card</Botao>
      </form>
    </section>
  )
  
}

export default Formulario