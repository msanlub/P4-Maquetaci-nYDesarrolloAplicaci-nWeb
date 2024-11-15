import logo from '../assets/logoHeader.png';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <section className="header">
            <section className="logo">
                <img src={logo} alt="Logo" />
            </section>
            <nav className="navbar">
                <ul>
                    <li><a href="#inicio">INICIO</a></li>
                    <li><a href="#usuario">USUARIO</a></li>
                    <li><a href="#eventos">EVENTOS</a></li>
                    <li><a href="#artista">ARTISTA</a></li>
                </ul>
                <section className="buscador-container">
                    <input type="text" placeholder="Buscar..." />
                </section>
            </nav>
        </section>
    );
};

export default Header;