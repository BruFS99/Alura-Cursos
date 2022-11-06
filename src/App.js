import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Setor from './componentes/Setor';

function App() {

  const setor = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8FFFF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#E9FFE3'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#f2d3d4' 
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario setor={setor.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {setor.map(setor => 
      <Setor 
      key={setor.nome} 
      nome={setor.nome} 
      corPrimaria={setor.corPrimaria} 
      corSecundaria={setor.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.setor === setor.nome)}
      />)}
      <Rodape/>

      

    </div>
  );
}

export default App;
