import './SelectForm.css'

const SelectForm = (props) => {
    return (
        <div className="select-form">
            <label>{props.label}</label>
            <select onChange=
            {event => 
            props.aoAlterado(
                event.target.value)}>
                <option key="select">Selecione um time...</option>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    );
}
export default SelectForm