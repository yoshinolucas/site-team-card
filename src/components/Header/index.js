import Nav from "./Nav"
import './Header.css'

const Header = () => {
    const navOption = [
        'Quem somos',
        'Meus cards',
        'Contato'
    ]
    return (
        <header>
            <Nav itens={navOption}/>
        </header>
    );
}

export default Header