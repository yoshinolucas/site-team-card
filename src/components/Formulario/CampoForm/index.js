import './CampoForm.css'

const CampoForm = (props) => {
    const placeholderFormat= `${props.placeholder}...`;
    return (
        <div className="campo-form">
            <label>{props.label}</label>
            <input placeholder={placeholderFormat}/>
        </div>
    );
}
export default CampoForm