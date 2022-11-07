import './Time.css'
import Card from './Card'

//Dumb component
const Time = (props) => {

    const iconFormatado = `${props.icon} margin-right: 10px`
    const css = {
        borderColor: props.corPrimaria,
        backgroundColor: props.corSecundaria,
    }

    return (
        //renderização condicional
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={css}><i className={iconFormatado}></i>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Card 
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    />
                )}
            </div>
        </section>
        : ''
    );
}

export default Time