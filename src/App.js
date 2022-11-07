import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ];

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Header />
      <Banner description="Banner teste" />
      <Formulario 
      times={times.map(time => time.nome)} 
      onCreate={colaborador => aoNovoColaboradorAdd(colaborador)} 
      />
      {times.map(time =>
        <Time 
         key={time.nome} 
         nome={time.nome} 
         corPrimaria={time.corPrimaria}
         corSecundaria={time.corSecundaria}
        />
      )}
    </div>
  );
}

export default App;
