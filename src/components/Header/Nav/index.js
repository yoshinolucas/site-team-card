import './Nav.css'
import Logo from './Logo';

const Nav = (props) => {
    return (
        <nav className="navbar">
            <Logo name="Logo"/>
            <ul>
                {props.itens.map((item)=>{
                    return <li><a href={item}>{item}</a></li> 
                })}
            </ul>
        </nav>
    );
}
export default Nav