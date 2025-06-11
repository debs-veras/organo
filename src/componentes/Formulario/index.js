import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) => {

  const  [nome, setNome] = useState('')
  const  [cargo, setCargo] = useState('')
  const  [imagem, setImagem] = useState('')
  const  [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome, cargo, imagem, time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  } 

  return(
    <section className = "formulario">
      <form onSubmit = {aoSalvar}>
        <h2>Preencha os dados dos seus melhores animes</h2>
        <CampoTexto obrigatorio = {true} valor = {nome} aoAlterado = {valor => setNome(valor)} label = "Nome" placeholder = "Digite seu nome" />
        <CampoTexto obrigatorio = {true} valor = {cargo} aoAlterado = {valor => setCargo(valor)} label = "Cargo" placeholder = "Digite seu cargo" />
        <CampoTexto valor = {imagem} aoAlterado = {valor => setImagem(valor)} label = "Imagem" placeholder = "Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio = {true} valor = {time} aoAlterado = {valor => setTime(valor)} label = "Time" itens = {props.times} />
        <Botao texto = "Criar Card" />
      </form>
    </section>
  )
}

export default Formulario