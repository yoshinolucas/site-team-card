import './CampoForm.css'

const CampoForm = (props) => {
    const placeholderFormat= `${props.placeholder}...`;
    return (
        <div className="campo-form">
            <label>{props.label}</label>
            <input
            required={props.required}
            onChange={event =>
                 props
                 .aoAlterado(
                    event
                    .target
                    .value)} 
            value={props.valor} 
            placeholder={placeholderFormat}/>
        </div>
    );
};
export default CampoForm