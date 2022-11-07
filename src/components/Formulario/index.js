import { useState } from 'react';
import CampoForm from './CampoForm';
import './Formulario.css'
import SelectForm from './SelectForm';
import Submit from './Submit';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.onCreate({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        });
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoForm 
                required={true}
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                label="Nome"
                placeholder="Digite o nome"
                />
                <CampoForm 
                required={true}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                label="Cargo" 
                placeholder="Digite o cargo"
                />
                <CampoForm
                required={true}
                valor={imagem}
                aoAlterado={imagem => setImagem(imagem)}
                label="Imagem"
                placeholder="Digite o caminho da imagem"
                />
                <SelectForm 
                required={true}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                label="Time" 
                itens={props.times}
                />
                <Submit>Criar card</Submit>
            </form>
        </section>
    );
}
export default Formulario