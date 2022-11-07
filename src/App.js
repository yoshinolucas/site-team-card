import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Header />
      <Banner description="Banner teste"/>
      <Formulario onCreate={colaborador => 
        aoNovoColaboradorAdd(colaborador)}/>
      <Time />
    </div>
  );
}

export default App;
