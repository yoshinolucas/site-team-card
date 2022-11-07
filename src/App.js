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
      corSecundaria: '#D9F7E9',
      icon: 'fa-solid fa-code'
    },
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
      icon: 'fa-solid fa-paint-roller'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
      icon:'fa-solid fa-database'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
      icon: 'fa-solid fa-microchip'
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
         icon={time.icon}
         colaboradores={colaboradores.filter(
          colaborador => 
          colaborador.time === time.nome)}
        />
      )}
    </div>
  );
}

export default App;
