import './Botao.css'

const Botao = (props) => {
  return (
    <div className="botao">
    <button type='submit'>{props.children}</button>
    </div>
  )
}

export default Botao