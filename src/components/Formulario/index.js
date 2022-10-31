import CampoForm from './CampoForm';
import './Formulario.css'
import SelectForm from './SelectForm';
import Submit from './Submit';

const Formulario = () => {

    const times = [
        'Desenvolvimento',
        'Infraestrutura',
        'UX & Design',
        'Mobile'
    ];
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoForm label="Nome" placeholder="Digite o nome"/>
                <CampoForm label="Cargo" placeholder="Digite o cargo"/>
                <SelectForm label="Time" itens={times}/>
                <Submit>Criar card</Submit>
            </form>
        </section>
    );
}
export default Formulario