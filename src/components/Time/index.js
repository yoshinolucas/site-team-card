import './Time.css'

//Dumb component
const Time = (props) => {
    const css = {
        borderColor: props.corPrimaria,
        backgroundColor: props.corSecundaria,
    }

    return (
        <section 
        className='time' 
        style={css}>
            <h3 style={css}>{props.nome}</h3>
        </section>
    );
}

export default Time